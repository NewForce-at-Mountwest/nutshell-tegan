import printToDom from "./taskPrintDom.js"
import taskFormBuilder from "./taskForm.js"
import apiManager from "./taskApiManager.js"
import buildObjects from "./taskObjectBuilder.js"
//adds click event to add new task button
const addClick = {

    // Event listener for adding a new task
    addNewTask: () => {
        document.querySelector("#taskFormContainer").addEventListener("click", () => {

            if (event.target.id === "saveTask") {
                console.log("clicked it!")

                apiManager.postTask(buildObjects.buildTaskObject())
                    // .then(apiManager.getTasks)
                    .then(() => {
                        printToDom.buildTaskList(sessionStorage.getItem("userId"))
                    })
            }
        })
    },


    // saveEditTask: () => {
    //   document.querySelector("taskDomContainer").addEventListener("click", () => {
    //     if(event.target.classList.contains("saveEdit")){
    //       console.log("saved it")
    //     }
    //   })
    // },



    // Event listener for entire task container element

    deleteClick: () => {
        document.querySelector("#taskDomContainer").addEventListener("click", () => {
            if (event.target.classList.contains("delete")) {
                console.log("clicked delete!")
                const taskId = event.target.id.split("-")[1];
                apiManager.deleteTask(taskId)
                    .then(() => {
                        printToDom.buildTaskList(sessionStorage.getItem("userId"))
                    })



                // --- CHECKBOX EVENT LISTENER ---//
            } else if (event.target.classList.contains("checkbox")) {
                console.log("check")
                const taskId = event.target.id.split("-")[1]; // 14
                if (document.querySelector(`#checkbox-${taskId}`).checked) {
                    apiManager.markAsComplete(taskId)
                } else {
                    apiManager.markAsIncomplete(taskId)
                }
                // ---- EVENT LISTENER FOR EDIT BUTTON --//
            } else if (event.target.classList.contains("edit")) {
                const taskId = event.target.id.split("-")[1];
                const singleTask = apiManager.editTask(taskId)
                    .then((singleTask) => {
                        console.log("tasksss")
                        document.querySelector("#taskDomContainer").innerHTML += taskFormBuilder.buildEditForm(singleTask);
                    })
                    // --- EVENT LISTENER FOR EDIT SAVE BUTTON --//
            } else if (event.target.classList.contains("saveEdit")) {
                console.log("saved")
                const taskId = event.target.id.split("-")[1];
                console.log(taskId)
                apiManager.putEdit(taskId, buildObjects.buildEditObject(taskId))
                    .then(() => {
                        printToDom.buildTaskList(sessionStorage.getItem("userId"))
                    })
            }
        })
    },
    // editClick: () => {
    //   document.querySelector("#taskEditContainer").addEventListener("click", ()=>
    //   {
    //     if(event.target.classList.contains("saveEdit")){
    //       console.log("clicked save!")
    //       const taskId = event.target.id.split("-")[1];
    //   apiManager.editTask(taskId)
    //     .then(() => {
    //       printToDom.buildTaskList(sessionStorage.getItem("userId"))
    //     })
    //     }
    //   })
    // }
}
export default addClick;