const API = "http://localhost:8080/api/tasks";

function loadTasks() {
    fetch(API)
        .then(res => res.json())
        .then(tasks => {
            const list = document.getElementById("taskList");
            list.innerHTML = "";

            tasks.forEach(task => {
                const li = document.createElement("li");

                li.innerHTML = `
                    <span style="${task.completed ? 'text-decoration: line-through;' : ''}">
                        ${task.title}
                    </span>
                    <div>
                        <button onclick="toggleTask(${task.id})">Done</button>
                        <button onclick="deleteTask(${task.id})">Delete</button>
                    </div>
                `;

                list.appendChild(li);
            });
        });
}   

function addTask() {
    const input = document.getElementById("taskInput");

    if (input.value.trim() === "") {
        alert("Enter a task!");
        return;
    }

    fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: input.value, completed: false })
    }).then(() => {
        input.value = "";
        loadTasks();
    });
}

function deleteTask(id) {
    fetch(`${API}/${id}`, { method: "DELETE" })
        .then(loadTasks);
}

function toggleTask(id) {
    fetch(`${API}/${id}`, { method: "PUT" })
        .then(loadTasks);
}

loadTasks();