import taskFormBuilder from "./taskForm.js"
import apiManager from "./taskApiManager.js"

const printToDom = {

    //builds users task list and prints to dom

    buildTaskList: userId => {
        document.querySelector("#taskDomContainer").innerHTML = "";
        apiManager.getTasks(userId).then(tasks => {
            tasks.forEach(singleTask => {
                if (singleTask.complete === false) {
                    document.querySelector("#taskDomContainer").innerHTML += taskFormBuilder.buildSingleTask(singleTask)
                } else {
                    document.getElementById("taskDomContainer").innerHTML = "<h4>All tasks completed</h4>"
                }
            })
        })
    },
    // button: userId => {
    //     document.querySelector("#taskDomContainer").innerHTML = `<button type="button" id="addTaskBtn-${userId}">New Task</button>`
    //   },    //print form
    //   newTaskForm: () => {
    //     document.querySelector("#taskFormContainer").innerHTML = taskFormBuilder.buildTaskForm();
    //   },
    //print edit form
    //   editForm: (taskObject) => {
    //     document.querySelector("#taskEditContainer").innerHTML = taskFormBuilder.buildEditForm(taskObject);
    //   },  saveButton: (userId) => {
    //     document.querySelector("#taskEditContainer").innerHTML = taskFormBuilder.saveButton(userId)
    //   },
    // taskbox: () => {
    //     document.querySelector("#taskDomContainer").innerHTML = `<div id="taskHeader">TASKS</div>
    //       <div id="taskListContainer"></div><`
    //   },


    // printForm: () => {
    //     document.getElementById("taskFormContainer").innerHTML = taskFormBuilder.buildTaskForm();

    // }
}

export default printToDom