$(document).ready(() => {
  // Getting a reference to the input field where user adds a new todo
  const $newItemInput = $('input.new-item');
  // Our new todos will go inside the answerContainer
  const $answerContainer = $('.answer-container');
  // Adding event listeners for deleting, editing, and adding todos
  $(document).on('click', 'button.delete', deleteAnswers);
  $(document).on('click', 'button.complete', toggleComplete);
  $(document).on('click', '.todo-item', editAnswers);
  $(document).on('keyup', '.todo-item', finishEdit);
  $(document).on('blur', '.todo-item', cancelEdit);
  $(document).on('submit', '#todo-form', insertAnswers);

  // Our initial todos array
  let answers = [];

  // Getting todos from database when page loads
  getAnswers();

  // This function resets the todos displayed with new todos from the database
  function initializeRows() {
    $answerContainer.empty();
    const rowsToAdd = [];
    for (let i = 0; i < answers.length; i++) {
      rowsToAdd.push(createNewRow(answers[i]));
    }
    $todoContainer.prepend(rowsToAdd);
  }

  // This function grabs todos from the database and updates the view
  function getAnswers() {
    $.get('/api/answers', (data) => {
      answers = data;
      initializeRows();
    });
  }

  // This function deletes a todo when the user clicks the delete button
  function deleteAnswers(event) {
    event.stopPropagation();
    const id = $(this).data('id');
    $.ajax({
      method: 'DELETE',
      url: `/api/answers/${id}`,
    }).then(getAnswers);
  }

  // This function handles showing the input box for a user to edit a todo
  function editAnswers() {
    const currentAnswers = $(this).data('answers');
    $(this).children().hide();
    $(this).children('input.edit').val(currentAnswers.text);
    $(this).children('input.edit').show();
    $(this).children('input.edit').focus();
  }

  // Toggles complete status
  function toggleComplete(event) {
    event.stopPropagation();
    const answers = $(this).parent().data('answers');
    answers.complete = !answers.complete;
    updateTodo(answers);
  }

  // This function starts updating a todo in the database if a user hits the "Enter Key"
  // While in edit mode
  function finishEdit(event) {
    const updatedAnswers = $(this).data('answers');
    if (event.which === 13) {
      updatedAnswers.text = $(this).children('input').val().trim();
      $(this).blur();
      updateAnswer(updatedAnswers);
    }
  }

  // This function updates a todo in our database
  function updateAnswer(answers) {
    $.ajax({
      method: 'PUT',
      url: '/api/answers',
      data: answers,
    }).then(getAnswers);
  }

  // This function is called whenever a todo item is in edit mode and loses focus
  // This cancels any edits being made
  function cancelEdit() {
    const currentAnswers = $(this).data('todo');
    if (currentAnswers) {
      $(this).children().hide();
      $(this).children('input.edit').val(currentAnswers.text);
      $(this).children('span').show();
      $(this).children('button').show();
    }
  }

  // This function constructs a todo-item row
  function createNewRow(answers) {
    const $newInputRow = $(
      [
        "<li class='list-group-item todo-item'>",
        '<span>',
        answers.text,
        '</span>',
        "<input type='text' class='edit' style='display: none;'>",
        "<button class='delete btn btn-danger'>x</button>",
        "<button class='complete btn btn-primary'>✓</button>",
        '</li>',
      ].join(''),
    );

    $newInputRow.find('button.delete').data('id', answers.id);
    $newInputRow.find('input.edit').css('display', 'none');
    $newInputRow.data('answers', answers);
    if (todo.complete) {
      $newInputRow.find('span').css('text-decoration', 'line-through');
    }
    return $newInputRow;
  }

  // This function inserts a new todo into our database and then updates the view
  function insertAnswers(event) {
    event.preventDefault();
    const answers = {
      text: $newItemInput.val().trim(),
      complete: false,
    };

    $.post('/api/answers', answers, getAnswers);
    $newItemInput.val('');
  }
});
