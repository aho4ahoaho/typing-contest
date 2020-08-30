let keycode = "";
let nextkey = "";
let charnumber = 0;
let count = 0;
let volume = 10;
let keycount = 0;
let misskey = 0;
let starttime;
let stoptime;
const autofontsize = (width, length) => {
    //文字サイズの自動調整
    if (document.body.offsetHeight / 20 > width / length) {
        return width / length + "px";
    } else {
        return document.body.offsetHeight / 20 + "px";
    }
}

function nextword() {
    let { word, yomi } = wordgen();
    keycode = "";
    charnumber = 0;
    const wordtext = document.getElementById("word");
    const yomitext = document.getElementById("yomi");

    //ローマ字へ変換
    keycode = romanconvert(yomi);
    keycount += keycode.length;

    //問題と最初の文字の表示
    wordtext.innerHTML = word;
    wordtext.style.fontSize = autofontsize(wordtext.offsetWidth, word.length);
    yomitext.innerHTML = keycode.charAt(0);
    yomitext.style.fontSize = autofontsize(yomitext.offsetWidth, yomi.length);
    document.getElementById("input").innerText = "";
    nextkey = keycode.charAt(0);


    //問題数のカウントを上げる
    count++;
}

function check(eventkey) {
    if (nextkey == eventkey && count <= volume) {
        if (charnumber < keycode.length - 1) {
            //次の文字の用意
            charnumber++;
            nextkey = keycode.charAt(charnumber);

            //画面更新
            const inputtext = document.getElementById("input")
            const yomitext = document.getElementById("yomi")
            inputtext.insertAdjacentText("beforeend", eventkey);
            inputtext.style.fontSize = autofontsize(inputtext.offsetWidth, inputtext.innerText.length);
            yomitext.insertAdjacentText("beforeend", nextkey);
            yomitext.style.fontSize = autofontsize(yomitext.offsetWidth, yomitext.innerText.length);
        } else if (charnumber == keycode.length - 1) {
            if (count != volume) {
                //次の問題へ
                nextword();
            } else {
                //タイマーストップ、スコア計算
                stoptime = new Date();
                let time = stoptime.getTime() - starttime.getTime();
                const score = Math.round(keycount / (time / 1000) * 60);

                //リザルト表示
                document.getElementById("score").innerText = Math.round(score);
                document.getElementById("keyspeed").innerText = Math.round(keycount / (time / 1000) * 10) / 10 + "key/s";
                document.getElementById("typecount").innerText = keycount + "key";
                document.getElementById("time").innerText = time / 1000 + "s";

                //ハイスコア処理
                if (localStorage.getItem("highscore") == null) {
                    localStorage.setItem("highscore", score);
                    document.getElementById(highscore_result).innerText = "ハイスコア!"
                } else if (localStorage.getItem("highscore") < score) {
                    localStorage.removeItem("highscore");
                    localStorage.setItem("highscore", score)
                    document.getElementById(highscore_result).innerText = "ハイスコア!"
                }

                //リザルト画面遷移
                document.getElementById("screen").className = "hidden";
                document.getElementById("result").className = "visible";

                //終了フラグを兼用
                count++;
            }
        }
    }
}

function gamestart() {
    //プレイ画面遷移
    document.getElementById("title").className = "hidden";
    document.getElementById("screen").className = "visible";

    //カウントダウン
    let i = 4;
    let t = setInterval(() => {
        i--;
        document.getElementById("count").innerText = i;
        document.getElementById("count").animate([{ opacity: '1' }, { opacity: '0' }], 1000)
        if (i == 0) {
            clearInterval(t);
        }
    }, 1000);

    //ゲーム開始
    setTimeout(() => {
        nextword();
        document.addEventListener("keypress", event => check(event.key));
        document.getElementById("count").innerText = "";
        starttime = new Date();
    }, 4000);
}

function restart() {
    //画面初期化
    document.getElementById("word").innerText = "";
    document.getElementById("yomi").innerText = "";
    document.getElementById("input").innerText = "";
    document.getElementById("count").innerText = "";

    //プレイ画面遷移
    document.getElementById("screen").className = "visible";
    document.getElementById("result").className = "hidden";

    //変数初期化
    count = 0;
    keycount = 0;
    gamestart();
}

function share(service) {
    //ボタンで条件分岐,サービス追加可
    if (service == "Tweet") {
        //URLを生成して別ウインドウ表示
        window.open("http://twitter.com/share?" + "url=" + location.href + "&text=スコア:" + document.getElementById("score").innerText + "(" + document.getElementById("keyspeed").innerText + "," + document.getElementById("typecount").innerText + "," + document.getElementById("time").innerText + ")");
    }
}

function traning() {
    const highscore = document.getElementById("highscore");
    if (highscore.innerText != "修行モード") {
        //問題数を100問に設定
        volume = 100;

        //アニメーション
        highscore.animate([{ transform: "rotateY(0deg)", opacity: "1" }, { transform: "rotateY(360deg)", opacity: "0" }], 1000);
        highscore.style.opacity = 0;
        document.getElementById("title").style.backgroundColor = "#600";
        document.getElementById("title").style.color = "white";
        setTimeout(() => {
            highscore.innerText = "修行モード";
            highscore.style.opacity = 1;
            highscore.animate([{ transform: "rotateY(360deg)", opacity: "0" }, { transform: "rotateY(720deg)", opacity: "1" }], 1000);
        }, 1000);
    } else {
        //問題数を標準の10問に設定
        volume = 10;

        //アニメーション
        highscore.animate([{ transform: "rotateY(720deg)", opacity: "1" }, { transform: "rotateY(360deg)", opacity: "0" }], 1000);
        highscore.style.opacity = 0;
        document.getElementById("title").style.backgroundColor = "rgb(255,70, 60)"
        document.getElementById("title").style.color = "black";
        setTimeout(() => {
            highscore.innerText = "通常モード";
            highscore.style.opacity = 1;
            highscore.animate([{ transform: "rotateY(360deg)", opacity: "0" }, { transform: "rotateY(0deg)", opacity: "1" }], 1000);
        }, 1000);
    }
}

//ハイスコア表示
if (localStorage.getItem("highscore") != null) {
    document.getElementById("highscore").innerText = "Highscore: " + localStorage.getItem("highscore");
}
document.getElementById("menu").animate([{ opacity: '0' }, { opacity: '1' }], 1000)