const addToDo = document.getElementById('newtask');
const inputsField = document.getElementById('inputField');
const tasksList = document.getElementById('taskList'); 

function addTask(event) {
    event.preventDefault();
    if (inputsField.value === '') {
        alert("enter a task")
    }
    else{const task = createTask(inputsField.value);
    tasksList.appendChild(task);
    inputsField.value = '';
    }
}

function createTask(inputsField) {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = `
        <input type="checkbox" display="none">
        <label>${inputsField}</label>
        <span class="delete">➖</span>
    `;
    const deleteButton = task.querySelector('.delete');
    deleteButton.addEventListener('click', deleteTask);
    return task;
}

function deleteTask(event) {
    event.target.parentElement.remove();
}

addToDo.addEventListener('submit', addTask);