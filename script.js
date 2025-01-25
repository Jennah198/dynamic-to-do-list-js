document.addEventListener('DOMContentLoaded', function () {
    loadTasks();  // Load tasks from Local Storage when page loads

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask(taskText, save = true) {
        // Task creation logic
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Remove task from both DOM and Local Storage
        removeButton.addEventListener('click', function () {
            removeTask(newTask, taskText);
        });

        // Append button and task to the DOM
        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);

        // Save task to Local Storage if save is true
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear input field
        taskInput.value = "";
    }

    // Function to remove a task from both DOM and Local Storage
    function removeTask(taskElement, taskText) {
        taskList.removeChild(taskElement); // Remove from DOM

        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText); // Remove from array
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update Local Storage
    }

    // Load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false to prevent saving again
    }

    // Event listener for adding tasks
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText); // Add task if input is not empty
        } else {
            alert("Please enter a task!");
        }
    });

    // Event listener for pressing Enter key to add tasks
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTask(taskText); // Add task on Enter key press
            } else {
                alert("Please enter a task!");
            }
        }
    });
});
