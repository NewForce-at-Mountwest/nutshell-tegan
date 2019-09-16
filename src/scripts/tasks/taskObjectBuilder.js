const buildObjects = {
    buildTaskObject: (userId) => {
        const taskName = document.querySelector(`#taskName-${userId}`).value
        const taskDescription = document.querySelector(`#taskDescription-${useriId}`).value
        const taskDueDate = document.querySelector(`#taskDueDate-${userId}`).value
        const isItComplete = false
        return {
            userId: sessionStorage.getItem("userId"),
            task: taskName,
            description: taskDescription,
            dueDate: taskDueDate,
            complete: isItComplete
        }
    },
    buildEditObject: (taskId) => {
        const editTaskName = document.querySelector(`#taskNameEdit-${taskId}`).value
        const editTaskDescription = document.querySelector(`#taskDescriptionEdit-${taskId}`).value
        const editTaskDueDate = document.querySelector(`#taskDueDateEdit-${taskId}`).value
        const editIsItComplete = false
        return {
            userId: sessionStorage.getItem("userId"),
            task: editTaskName,
            description: editTaskDescription,
            dueDate: editTaskDueDate,
            complete: editIsItComplete,
        }
    }
}
export default buildObjects;