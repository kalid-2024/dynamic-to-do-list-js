
document.addEventListener('DOMContentLoaded', function (){
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask(){
        let taskText = taskInput.value.trim(); 
        if(taskText === ""){
            alert("Enter a Task!");
        }else{
            const li = document.createElement("li");
            li.textContent = taskText;
            const btn = document.createElement("button");
            btn.textContent = "Remove";
            btn.classList.add("remove-btn");

            btn.addEventListener('onclick', () => {
                taskList.removeChild(li);
                li.appendChild(btn);
                taskList.appendChild(li);
                taskInput.value = "";
            });
         }
    }

addButton.addEventListener('click', addTask)
taskInput.addEventListener('keydown', (event) => {
    if(event.key === "Enter"){
        addTask();
    }
});
document.addEventListener('DOMContentLoaded',addTask)




});