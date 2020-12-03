// javascript file for scoreboard written needs review)
var scores = [
    {name:"User1",Score:"",id:"User1"}
]

var textDisplay;

var $= function (id) {
    return document.getElementById(id)
};

var listArray = function () {
    var scoresString = "";
    for (var i = 0; i < names.length; i++) {
        scoresString += names[i] + ", " + scores[i] + "\n";
    } // lists all names and scores in their respective array orders
    $("results").value = scoresString;

};
var showhighest = function () {
    var bestString = "";
    var highScore = Math.max.apply(Math, scores);
    for (var i in scores) {
        if (scores[i] > highScore) highScore = scores[i];
        bestString += "High Score user = " + names[i] + "\n" + "High Score = " + highScore;
    }
    $("results").value = bestString;
};

$("add").onclick = addElement;
$("name").focus();
$("show_best").onclick = showHighest;