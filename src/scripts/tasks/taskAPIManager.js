const taskApiManager = {
    getTasks: (userId) => {
        return fetch(`http://localhost:8088/tasks?userId=${userId}`)
            .then(response => response.json())
    },
    postTask: (taskObject) => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObject)
        })
    },
    editTask: (taskId) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`)
            .then(singleTask => singleTask.json())
    },

    putEdit: (taskId, taskObject) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObject)
        })
    },
    deleteTask: (taskId) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "DELETE"
        })
    },
    getSingleTask: (taskId) => fetch(`http://localhost8088/tasks/${taskId}`.then(singleTask.json())),

    markAsComplete: (taskId) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ completed: "true" })
        })
    },
    markAsIncomplete: taskId => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Typer": "application/json"
            },
            body: JSON.stringify({ completed: "false" })
        })
    }
}
export default taskApiManager