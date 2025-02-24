



let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

renderList();

function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

function renderList() {
    let tempInfo = '';
    for (let i = 0; i < tasksArray.length; i++) {
        let isChecked = tasksArray[i].checked ? "checked" : "";
        
        tempInfo += ` 
            <li class="resalte ${isChecked}" onclick="toggleTask(${i})">
                <h3>${tasksArray[i].name}</h3>
                <p>${tasksArray[i].date}</p>
                <button id="remove" onclick="event.stopPropagation(); removeTask(${i});">✘</button> 
            </li>`;
    }
    document.getElementById("list-container").innerHTML = tempInfo;
}

function addToDoList() {
    let textTask = document.getElementById("input-box").value;
    let dateTask = document.getElementById("date").value;

    if (textTask === '') {
        alert('لطفا ابتدا یک برنامه بنویسید!');
        return;
    }

    let tempArray = { name: textTask, date: dateTask, checked: false };
    tasksArray.push(tempArray);

    saveToLocalStorage();
    renderList();

    document.getElementById("input-box").value = '';
    document.getElementById("date").value = '';
}

function toggleTask(index) {
    tasksArray[index].checked = !tasksArray[index].checked;
    saveToLocalStorage();
    renderList();
}

function removeTask(index) {
    tasksArray.splice(index, 1);
    saveToLocalStorage();
    renderList();
}
