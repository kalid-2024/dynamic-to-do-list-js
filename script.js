
document.addEventListener('DOMContentLoaded', function (){
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }


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
    // Event listener to remove the task when button is clicked
            btn.addEventListener('click', () => {
                taskList.removeChild(li);
                removeTaskFromStorage(taskText); // Remove from Local Storage
            });
    // Append button to the list item and the list item to the task list
                li.appendChild(btn);
                taskList.appendChild(li);
                taskInput.value = "";

            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
        }

    // Remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Load tasks when page is loaded
loadTasks();

// Add task when the Add button is clicked
    addButton.addEventListener('click', addTask)

// Add task when "Enter" key is pressed
    taskInput.addEventListener('keypress', (event) => {
        if(event.key === "Enter"){
            addTask();
        }
    });

});