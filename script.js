
document.addEventListener('DOMContentLoaded', function (){
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    let tasks = [];

    // Load tasks from Local Storage
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks); // Convert JSON string back to array
            tasks.forEach(taskText => {
                createTaskElement(taskText);
            });
        }
    }

    // Save tasks to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Convert array to JSON string and save
    }

    // Create task element in the DOM
    function createTaskElement(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        const btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.classList.add("remove-btn");

        // Event listener to remove the task
        btn.addEventListener('click', () => {
            const index = tasks.indexOf(taskText);
            if (index > -1) {
                tasks.splice(index, 1); // Remove task from array
                saveTasks(); // Update Local Storage
                taskList.removeChild(li); // Remove task from DOM
            }
        });

        li.appendChild(btn);
        taskList.appendChild(li);
    }
    



    function addTask(){
        let taskText = taskInput.value.trim(); 
        if(taskText === ""){
            alert("Enter a Task!");
            return;
        }else{
            const li = document.createElement("li");
            li.textContent = taskText;
            const btn = document.createElement("button");
            btn.textContent = "Remove";
            btn.classList.add("remove-btn");
    // Event listener to remove the task when button is clicked
            btn.addEventListener('click', () => {
                taskList.removeChild(li);
            });
    // Append button to the list item and the list item to the task list
                li.appendChild(btn);
                taskList.appendChild(li);
                saveTasks(); // Save tasks to Local Storage
                // Clear the input field after adding the task
                taskInput.value = "";
            
            }
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