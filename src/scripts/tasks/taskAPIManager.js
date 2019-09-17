// /module fetches from API and handles all API requests

const apiManager = {
    //fetches users tasks
    getTasks: (userId) => {

        return fetch(`http://localhost:8088/tasks?userId=${userId}`)
            .then(r => r.json())
    },
    //posts new tasks
    postTask: (taskObject) => {

        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObject)
        })
    },
    //edit tasks
    editTask: (taskId) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`)
            .then(singleTask => singleTask.json())

    },

    //putEdit method
    putEdit: (taskId, taskObject) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObject)
        })

    },

    //deletes task

    deleteTask: (taskId) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "DELETE"
        });
    },

    getSingleTask: (taskId) => fetch(`http://localhost:8088/tasks/${taskId}`)
        .then(singleTask => singleTask.json()),


    markAsComplete: (taskId) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ completed: "true" })
        });
    },

    markAsIncomplete: taskId => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ completed: "false" })
        });
    }

    // editTask: (idParam, taskObject) => {
    //   return fetch(`http://localhost:8088/tasks/${idParam}`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type" : "application/json"
    //     },
    //     body: JSON.stringify(taskObject)
    //   })
    // }
    //delete tasks
}

export default apiManager