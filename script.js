


let keycode = ""
let nextkey = ""
let charnumber = 0
let count = 0
let starttime
let stoptime

function nextword() {
    let {word,yomi} = wordgen();
    keycode = "";
    charnumber = 0;
    document.getElementById("word").innerHTML = "";
    document.getElementById("input").innerText = "";
    count++;

    console.log(word+yomi)
    keycode = romanconvert(yomi);
    document.getElementById("word").innerHTML = word;
    document.getElementById("yomi").innerHTML = yomi;
    nextkey = keycode.charAt(0);
}

function check(eventkey) {
    if (nextkey == eventkey && count <= 3) {
        document.addEventListener("keydown", event => check(event.key));
        if (charnumber < keycode.length - 1) {
            charnumber++;
            nextkey = keycode.charAt(charnumber);
            document.getElementById("input").insertAdjacentText("beforeend", eventkey);
        } else if (charnumber == keycode.length - 1) {
            nextword();
        }
    } else if (count == 4) {
        stoptime = new Date();
        document.getElementById("word").innerHTML = "Clear";
        let time =stoptime.getTime() - starttime.getTime();
        document.getElementById("yomi").innerText = time/1000;
        count++;
    }
}

function gamestart(){
    document.getElementById("title").className = "hidden";
    let i = 4;
    let t = setInterval(() => {
        i--;
        document.getElementById("count").innerText = i;
        console.log(i)
        if(i==0){
            clearInterval(t);
        }
    }, 1000);
    setTimeout(() =>{
        console.log("a")
        nextword();
        document.addEventListener("keypress", event => check(event.key));
        starttime = new Date();
    },4000)
}
