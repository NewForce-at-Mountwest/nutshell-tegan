import printToDom from "./taskPrintDom.js";
import addClick from "./taskClickEvents.js"
import taskFormBuilder from "./taskForm.js";

const afterLoad = () => {
    const userLogin = sessionStorage.getItem("userId")
    printToDom.buildTaskList(userLogin)
    document.querySelector("#taskFormContainer").innerHTML = taskFormBuilder.buildTaskForm()

    // printToDom.button(userId);
    // addClick.addNewTask();
    // addClick.deleteClick();


}
export default afterLoad