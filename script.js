let nominative = ["わたしは",]
let predicate = ["おまんこを",]
let verb = ["いじった",]



let keycode = ""
let nextkey = ""
let charnumber = 0
let count = 0

function nextword() {
    word = nominative[getRandomInt(0, nominative.length)] + predicate[getRandomInt(0,predicate.length)] + verb[getRandomInt(0,verb.length)];
    console.log(word);
    keycode = "";
    charnumber = 0;
    document.getElementById("word").innerHTML = "";
    document.getElementById("input").innerText = "";
    count++;

    /*for (let i = 0; i < word.length; i++) {
        keycode += romankey[word.charAt(i)];
    }*/
    keycode = kanaToRoman(word,"hepburn",{bmp:false,longsound:"hypehn"})
    document.getElementById("word").innerHTML = keycode;
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


nextword();
document.addEventListener("keypress", event => check(event.key));