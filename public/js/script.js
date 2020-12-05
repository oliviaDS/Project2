// javascript file for scoreboard written needs review)
const scores = [
  { name: 'User1', Score: '', id: 'User1' },
];

let textDisplay;

const $ = function (id) {
  return document.getElementById(id);
};

const listArray = function () {
  let scoresString = '';
  for (let i = 0; i < names.length; i++) {
    scoresString += `${names[i]}, ${scores[i]}\n`;
  } // lists all names and scores in their respective array orders
  $('results').value = scoresString;
};
const showhighest = function () {
  let bestString = '';
  let highScore = Math.max.apply(Math, scores);
  for (const i in scores) {
    if (scores[i] > highScore) highScore = scores[i];
    bestString += `High Score user = ${names[i]}\n` + `High Score = ${highScore}`;
  }
  $('results').value = bestString;
};

$('add').onclick = addElement;
$('name').focus();
$('show_best').onclick = showHighest;
