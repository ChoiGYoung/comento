const taskInput = document.getElementById("task");
const tasksList = document.getElementById("tasks");

function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() === "") {
        return;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-button" onclick="deleteTask(this)">삭제</button>
        <button class="complete-button" onclick="completeTask(this)">완료</button>
    `;

    tasksList.appendChild(listItem);
    taskInput.value = "";
}

function deleteTask(button) {
    const listItem = button.parentNode;
    tasksList.removeChild(listItem);
}

function completeTask(button) {
    const taskText = button.parentNode.querySelector("span");
    taskText.classList.toggle("completed");
}