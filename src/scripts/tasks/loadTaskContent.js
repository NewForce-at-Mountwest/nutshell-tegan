const afterLoad = () => {
    const userLogin = sessionStorage.getItem("userId")
    printToDom.buildTaskList(userLogin)
    document.querySelector("#main-container").innerHTML = taskFormBuilder.buildTaskForm()
}
export default afterLoad;