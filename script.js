document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Don't save again when loading tasks
    }

    // Add new task to the list and optionally save to Local Storage
    function addTask(taskText = '', save = true) {
        if (!taskText) {
            taskText = taskInput.value.trim();
        }

        if (taskText === "") {
            alert("Enter a Task!");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.classList.add("remove-btn");

        // Event listener to remove the task
        btn.addEventListener('click', () => {
            taskList.removeChild(li); // Remove from DOM
            removeTaskFromStorage(taskText); // Remove from Local Storage
        });

        li.appendChild(btn);
        taskList.appendChild(li);
        taskInput.value = ""; // Clear input field

        // Save to Local Storage if 'save' is true
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText); // Filter out the removed task
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save the updated array
    }

    // Load tasks when page is loaded
    loadTasks();

    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', () => addTask());

    // Add task when the "Enter" key is pressed
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
