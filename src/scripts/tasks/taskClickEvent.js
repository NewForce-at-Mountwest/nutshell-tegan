import eventApiManager from "../eventApiManager"



const addClick = {
    addNewTask: () => {
        document.querySelector("#main-container").addEventListener("click", () => {
            if (event.target.id === "saveTask") {
                console.log("it be clicked now!")
                eventApiManager.postTask(buildObjects.buildTaskObject())
                    .then(() => {
                        printToDom.buildTaskList(sessionStorage.getItem("userId"))
                    })
            }
        })
    },

    deleteClick: () => {
        document.querySelector("#taskDomContainer").addEventListener("click", () => {
            if (event.target.classList.contains("delete")) {
                console.log("click removed")
                const taskId = event.target.id.split("-")[1];
                eventApiManager.deleteTask(taskId).then(() => {
                    printToDom.buildTaskList(sessionStorage.getItem("userId"))
                })
            }
        })
    }
}