
document.addEventListener('DOMContentLoaded', function (){
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

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
                // Clear the input field after adding the task
                taskInput.value = "";
            
            }
        }
// Add task when the Add button is clicked
    addButton.addEventListener('click', addTask)

// Add task when "Enter" key is pressed
    taskInput.addEventListener('keydown', (event) => {
        if(event.key === "Enter"){
            addTask();
        }
    });


});