document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim(); // Get task input value

        if (taskText === "") {
            alert("Please enter a task!"); // Prompt user if input is empty
            return;
        }

        // Create a new li element for the task
        const newTask = document.createElement('li');
        newTask.textContent = taskText;  // Set the text content to the task text

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Add event listener to the remove button
        removeButton.addEventListener('click', function () {
            taskList.removeChild(newTask);  // Remove the task when clicked
        });

        // Append the remove button to the li element
        newTask.appendChild(removeButton);

        // Append the li to the task list
        taskList.appendChild(newTask);

        // Clear the task input field
        taskInput.value = "";
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);  // Add task on button click
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();  // Add task on Enter key press
        }
    });
});
