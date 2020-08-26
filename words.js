function wordgen(){
    let nominative = [
        ["私は","わたしは"],
        ["俺は","おれは"],
        ["拙者は","せっしゃは"],
        ["機関車が","きかんしゃが"],
        ["スマホが","すまほが"],
        ["得体のしれない化け物が","えたいのしれないばけもの"]
    ]
    
    let predicate = [
        ["ニコニコ本社を","にこにこほんしゃを"],
        ["寿司屋で","すしやで"],
        ["ボウリング場で","ぼうりんぐじょうで"],

    ]

    let verb = [
        ["爆破した","ばくはした"],
        ["手を洗った","てをあらった"]
        ]
    
    let ni = getRandomInt(0, nominative.length);
    let pi = getRandomInt(0, predicate.length);
    let vi = getRandomInt(0, verb.length);

    word = nominative[ni][0] + predicate[pi][0] + verb[vi][0];
    yomi = nominative[ni][1] + predicate[pi][1] + verb[vi][1];

    return {word,yomi};
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}