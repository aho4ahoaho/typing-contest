function wordgen() {
    let nominative = [
        ["私は", "わたしは"],
        ["俺は", "おれは"],
        ["あてぃしは", "あてぃしは"],
        ["拙者は", "せっしゃは"],
        ["機関車が", "きかんしゃが"],
        ["スマホが", "すまほが"],
        ["得体のしれない化け物が", "えたいのしれないばけものが"],
        ["AIが", "AIが"],
        ["PCを", "PCを"],
        ["店員が", "てんいんが"]
    ]

    let predicate = [
        ["ニコニコ本社", "にこにこほんしゃ"],
        ["寿司屋", "すしや"],
        ["ボウリング場", "ぼうりんぐじょう"],
        ["スタジアム", "すたじあむ"],
        ["コンビニ", "こんびに"],
        ["空", "そら"],
        ["海", "うみ"],
        ["電車", "でんしゃ"],
        ["車", "くるま"],
        ["異世界", "いせかい"]
    ]

    let verb = [
        ["を爆破した", "をばくはした"],
        ["で手を洗った", "でてをあらった"],
        ["でボールを投げた", "でぼーるをなげた"],
        ["でキレた", "できれた"],
        ["に飛んでいった", "にとんでいった"],
        ["で溺れた", "でおぼれた"],
        ["で寝た", "でねた"],
        ["が反逆を起こした", "がはんぎゃくをおこした"],
        ["が壊れた", "がこわれた"],
        ["がこちらを見ている", "がこちらをみている"]
    ]

    let ni = getRandomInt(0, nominative.length);
    let pi = getRandomInt(0, predicate.length);
    let vi = getRandomInt(0, verb.length);

    word = nominative[ni][0] + predicate[pi][0] + verb[vi][0];
    yomi = nominative[ni][1] + predicate[pi][1] + verb[vi][1];

    return { word, yomi };
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}