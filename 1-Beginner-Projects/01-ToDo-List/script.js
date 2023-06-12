document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.querySelector('#todo-form'); // Selecting the form element
    const todoInput = document.querySelector('#todo-input'); // Selecting the input field
    const todoList = document.querySelector('#todo-list'); // Selecting the unordered list

    function createTodoItem(todo) {
        const listItem = document.createElement('li'); // Creating a new list item
        const checkbox = document.createElement('input'); // Creating a checkbox
        checkbox.type = 'checkbox'; // Setting the checkbox type to 'checkbox'
        const label = document.createElement('label'); // Creating a label
        label.textContent = todo; // Setting the label text to the todo text

        listItem.appendChild(checkbox); // Appending the checkbox to the list item
        listItem.appendChild(label); // Appending the label to the list item
        todoList.appendChild(listItem); // Appending the list item to the unordered list
    }

    function handleFormSubmit(event) {
        event.preventDefault(); // Preventing the default form submission behavior
        const todoText = todoInput.value.trim(); // Getting the trimmed value of the input

        if (todoText !== '') { // Checking if the input value is not empty
            createTodoItem(todoText); // Creating a new todo item with the input value
            todoInput.value = ''; // Clearing the input field
        }
    }

    todoForm.addEventListener('submit', handleFormSubmit); // Adding a submit event listener to the form
});
