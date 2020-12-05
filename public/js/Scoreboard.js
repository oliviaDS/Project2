$(document).ready(function(){
var nameInput = $("")


};)













































let result = 0;
const labelCount = document.querySelectorAll('results').length;
const questionValue = 100 / labelCount;

const right = () => {
  result += 33.3;
};

const wrong = () => {
  result -= 33.3;
};

const finish = () => {
  totalScore = result;

  if (totalScore < 0) {
    totalScore = 0;
  }

  alert(Math.ceil(totalScore));
};
