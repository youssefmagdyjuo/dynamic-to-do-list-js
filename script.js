document.addEventListener('DOMContentLoaded', function() {
    let taskInput = document.getElementById('task-input');
    let addButton = document.getElementById('add-task-btn');
    let taskList = document.getElementById('task-list');

    function getTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks() {
        taskList.innerHTML = '';
        let tasks = getTasks();
        tasks.forEach((task, idx) => {
            let li = document.createElement('li');
            li.textContent = task;
            let removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.classList.add('remove-btn');
            li.appendChild(removeBtn);
            taskList.appendChild(li);

            removeBtn.onclick = () => {
                tasks.splice(idx, 1);
                saveTasks(tasks);
                renderTasks();
            };
        });
    }

    function addTask() {
        let taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }
        let tasks = getTasks();
        tasks.push(taskText);
        saveTasks(tasks);
        renderTasks();
        taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    renderTasks();
});