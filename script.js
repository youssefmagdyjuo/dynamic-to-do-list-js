document.addEventListener('DOMContentLoaded', function() {

    let taskInput = document.getElementById('task-input');
    let addButton = document.getElementById('add-task-btn');
    let taskList = document.getElementById('task-list');
    function addTask(){
        let taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }
        let li = document.createElement('li');
        li.textContent = taskText;
        let removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');
        taskList.appendChild(li);
        li.appendChild(removeBtn);
        taskInput.value = '';
        removeBtn.onclick = () => {
        taskList.removeChild(li);
        };
    }
    addButton.addEventListener('click', addTask)
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }})
    })