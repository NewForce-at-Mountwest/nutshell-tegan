import apiManager from "./taskApiManager.js"
import buildObjects from "./taskObjectBuilder.js"
import addClick from "./taskClickEvents.js"

//builds the task form

const taskFormBuilder = {
        buildTaskForm: (userId) => {
            return `
        <div id = "taskForm">
        <h3>Add new task</h3>
        <input type="text" id="taskName-${userId}" placeholder="task name"></input>
        <input type="text" id="taskDescription-${userId}" placeholder="description"></input>
        <input type="date" id="taskDueDate-${userId}"></input>
        <button id="saveTask">Add Task</button>
        </div>
        `
        },

        //builds edit form

        buildEditForm: (editTask) => {
            return `
        <div class="editForm" id="editTask-${editTask.id}">
        <input type="text" class="editTask" value="${editTask.task}" id="taskNameEdit-${editTask.id}">
        <input type="text" class="editTask" value="${editTask.description}" id="taskDescriptionEdit-${editTask.id}">
        <input type="date" class="editDate" value= "${editTask.dueDate}" id="taskDueDateEdit-${editTask.id}">
        <input class="checkbox" id="checkbox-${editTask.complete}" type="checkbox">
        <button class="saveEdit" id="save-${editTask.id}">Save Task</button>
        `
        },


        buildSingleTask: (singleTaskObject) => {
            return `<div class="task" id="task-${singleTaskObject.id}">
        <label class="checkbox">
        <input class="checkbox" id="checkbox-${singleTaskObject.id}" type="checkbox" ${singleTaskObject.complete === "true"? "checked" : ""}/>
        </label>
        <p>${singleTaskObject.task}</p>
          <p>${singleTaskObject.description}</p>
          <p>${singleTaskObject.dueDate}</p>
          <button id="delete-${singleTaskObject.id}" class="delete">delete</button>
          <button id="edit-${singleTaskObject.id}" class="edit">edit</button>
      </div>`
        },
        // saveButton: (userId) => { //save button html
        //     return `<button type="button" class="saveEdit" id="saveTaskBtn-${userId}">Save</button>`
        // },
        // saveEdit: (taskId) => {
        //     return `<button type="button" class="saveEdit" id="editTaskSaveBtn-${taskId}">Save Changes</button>`
        // }
    }
    // <button id="delete-${singleTaskObject.id}">delete
    // <button id="edit-${singleTaskObject.id}">edit
    // buildSingleTask: (taskName, taskDescription, taskDueDate, completed, id) => {
    //     return `
    //     <div id="singleTask-${id}">
    //     <h3>${taskName}</h3>
    //     <h4>${taskDescription}</h4>
    //     <h4>${taskDueDate}</h4>
    //     <h4>${completed}</h4>

//     </div>`
// }

// <label class="checkbox">
// <input class="checkbox" id="checkbox-${buildTaskObject.id}" type="checkbox" ${buildTaskObject.completed === "true"? "checked" : ""}/></input>

export default taskFormBuilder