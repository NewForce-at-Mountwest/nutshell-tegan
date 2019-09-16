import taskApiManager from "./taskAPIManager"
import buildObjects from "./taskObjectBuilder"

const taskFormBuilder = {
    buildTaskForm: (userId) => {
        return `<div id = "taskForm">
    <h3>Add new task</h3>
    <input type="text" id="taskName-${userId}" placeholder="task name"></input>
    <input type="text" id="taskDescription-${userId}" placeholder="description"></input>
    <input type="date" id="taskDueDate-${userId}"></input>
    <button id="saveTask">Add Task</button>
    </div>
    `

    },

    buildEditForm: (editTask) => {
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

    }
}
export default taskFormBuilder;