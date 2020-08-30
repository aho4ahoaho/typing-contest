


let keycode = "";
let nextkey = "";
let charnumber = 0;
let count = 0;
let keycount=0;
let misskey =0;
let starttime;
let stoptime;
const autofontsize = (width,length) => {
    if(document.body.offsetHeight/20 > width / length){
        return width / length + "px"; 
    }else{
        return document.body.offsetHeight /20 + "px";
    }
}

function nextword() {
    let {word,yomi} = wordgen();
    keycode = "";
    charnumber = 0;
    const wordtext = document.getElementById("word");
    const yomitext = document.getElementById("yomi");


    keycode = romanconvert(yomi);
    keycount += keycode.length;


    wordtext.innerHTML = word;
    wordtext.style.fontSize =autofontsize(wordtext.offsetWidth,word.length);
    yomitext.innerHTML = yomi;
    yomitext.style.fontSize =autofontsize(yomitext.offsetWidth,yomi.length);
    document.getElementById("input").innerText = "";
    
    count++;
    nextkey = keycode.charAt(0);
}

function check(eventkey) {
    if (nextkey == eventkey && count <= 3) {
        if (charnumber < keycode.length - 1) {
            charnumber++;
            nextkey = keycode.charAt(charnumber);

            const inputtext = document.getElementById("input")
            inputtext.insertAdjacentText("beforeend", eventkey);
            inputtext.style.fontSize = autofontsize(inputtext.offsetWidth,inputtext.innerText.length);
        } else if (charnumber == keycode.length - 1) {
            if(count != 3){
                nextword();
            }else{
                stoptime = new Date();
                let time =stoptime.getTime() - starttime.getTime();
                const score = Math.round(keycount / (time / 1000) * 60);
        
                document.getElementById("score").innerText = Math.round(score);
                document.getElementById("keyspeed").innerText = Math.round(keycount / (time / 1000) *10) / 10 + "key/s";
                document.getElementById("typecount").innerText = keycount;
                document.getElementById("time").innerText = time/1000 + "s";


                if(localStorage.getItem("highscore") == null){
                    localStorage.setItem("highscore",score);
                    console.log("HighScore")
                }else if(localStorage.getItem("highscore") < score){
                    localStorage.removeItem("highscore");
                    localStorage.setItem("highscore",score)
                    console.log("highscore")
                }
        
                document.getElementById("screen").className = "hidden";
                document.getElementById("result").className = "visible";
        
                count++;
            }
        }
    }
}

function gamestart(){
    document.getElementById("title").className = "hidden";
    document.getElementById("screen").className = "visible";
    let i = 4;
    let t = setInterval(() => {
        i--;
        document.getElementById("count").innerText = i;
        document.getElementById("count").animate([{opacity: '1'}, {opacity: '0'}], 1000)
        if(i==0){
            clearInterval(t);
        }
    }, 1000);
    setTimeout(() =>{
        nextword();
        document.addEventListener("keypress", event => check(event.key));
        document.getElementById("count").innerText ="";
        starttime = new Date();
    },4000);
}

function restart(){
    document.getElementById("screen").className = "visible";
    document.getElementById("result").className = "hidden";
    
    document.getElementById("word").innerText = "";
    document.getElementById("yomi").innerText = "";
    document.getElementById("input").innerText = "";
    document.getElementById("count").innerText ="";

    count = 0;
    keycount = 0;
    gamestart();
}

function share(service){
    console.log(service)
    if(service == "Tweet"){
        window.open("http://twitter.com/share?"+"url="+location.href+"&text=スコア:"+document.getElementById("score").innerText+"("+document.getElementById("keyspeed").innerText+","+document.getElementById("typecount").innerText+","+document.getElementById("time").innerText+")");
    }
}

if(localStorage.getItem("highscore") != null){
   document.getElementById("highscore").innerText = "Highscore: " + localStorage.getItem("highscore");
}
document.getElementById("menu").animate([{opacity: '0'}, {opacity: '1'}], 1000)