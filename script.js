


let keycode = ""
let nextkey = ""
let charnumber = 0
let count = 0

function nextword() {
    let {word,yomi} = wordgen();
    keycode = "";
    charnumber = 0;
    document.getElementById("word").innerHTML = "";
    document.getElementById("input").innerText = "";
    count++;

    keycode = romanconvert(yomi);
    document.getElementById("word").innerHTML = word;
    document.getElementById("yomi").innerHTML = yomi;
    nextkey = keycode.charAt(0);
}

function check(eventkey) {
    if (nextkey == eventkey && count <= 3) {
        document.addEventListener("keydown", event => check(event.key));
        console.log(charnumber)

        if (charnumber < keycode.length - 1) {
            charnumber++;
            nextkey = keycode.charAt(charnumber);
            document.getElementById("input").insertAdjacentText("beforeend", eventkey);
        } else if (charnumber == keycode.length - 1) {
            nextword();
        }
    } else if (count > 3) {
        document.getElementById("word").innerHTML = "Clear";
    }
}




nextword();
document.addEventListener("keypress", event => check(event.key));