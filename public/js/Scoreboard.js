$(document).ready(function(){
var nameInput = $("user-name");
var userContainer = $(".user-container");
var scoreList = $("");

$(document).on("submit", "#user-form", handleUserFormSubmit);

//Get list of Users
getUsers();


// Function for User form submission
function handleUserFormSubmit(event){
  event.preventDefault();
  if(!nameInput.val().trim().trim()) {
    return;
  }
  hailUser({
    name: nameInput
      .val()
      .trim()
  });
}

// Call user
function hailUser(userData){
  $.post("api/user", userData)
    .then(getUsers);
}



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
