$(document).ready(() => {
  const nameInput = $('user-name');
  const userContainer = $('.user-container');
  const scoreList = $('');

  $(document).on('submit', '#user-form', handleUserFormSubmit);

  // Get list of Users
  getUsers();

  // Function for User form submission
  function handleUserFormSubmit(event) {
    event.preventDefault();
    if (!nameInput.val().trim().trim()) {
      return;
    }
    hailUser({
      name: nameInput
        .val()
        .trim(),
    });
  }

  // Call user
  function hailUser(userData) {
    $.post('api/user', userData)
      .then(getUsers);
  }

  // Function for retrieving users
  function getUsers() {
    $.get('/api/user', (data) => {
      const rowsToAdd = [];
      for (let i = 0; i < data.length; i++) {
        rowsToAdd.push(createUserRow(data[i]));
      }
      renderUserList(rowstoAdd);
      nameInput.val('');
    });
  }

  // A function for rendering the list of users to the page
  function renderUserList(rows) {
    scoreList.children().not(':last').remove();
    userContainer.children('.alert').remove();
    if (rows.length) {
      console.log(rows);
      userList.prepend(rows);
    } else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    const alertDiv = $('<div>');
    alertDiv.addClass('alert alert-danger');
    alertDiv.text('You must create an Author before you can create a Post.');
    userContainer.append(alertDiv);
  }
});

