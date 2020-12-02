$(document).ready(() => {
    // Getting a reference to the input field where user adds user name
    const $newuserInput = $('input.userName');
    // Our new user will go into user Container
    const $UserContainer = $('.user-container');
    // Adding event listeners for adding users
    
    $(document).on('AddUser', '#userName', insertuser);
  
    // Our initial array
    let userName = [];
  
    // Getting Score from database when page loads
    getUserName();
  
    // This function resets the todos displayed with new user from the database
    function initializeRows() {
      $todoContainer.empty();
      const rowsToAdd = [];
      for (let i = 0; i < todos.length; i++) {
        rowsToAdd.push(createNewRow(todos[i]));
      }
      $todoContainer.prepend(rowsToAdd);
    }
  
    // This function grabs todos from the database and updates the view
    function getScore() {
      $.get('/api/Score', (data) => {
        Score = data;
        initializeRows();
      });
    }
  
    
  
    
  
    
  
    
    // This function updates score in our database
    function updateScore(Score) {
      $.ajax({
        method: 'PUT',
        url: '/api/Score',
        data: Score,
      }).then(getScores);
    }
  
    
    
      
    
  
    // This function inserts a new todo into our database and then updates the view on score board
    function insertScore(event) {
      event.preventDefault();
      const todo = {
        text: $newItemInput.val().trim(),
        complete: false,
      };
  
      $.post('/api/Score', score, getScore);
      $newItemInput.val('');
    }
  });