import eventDomPrinter from "./eventDomPrinter.js"
import eventApiManager from "./eventApiManager.js"

// import addClick from "./taskClickEvents.js"
// import eventDomPrinter from "eventDomPrinter.js"

const eventAfterLoad = () => {
    const userLogin = sessionStorage.getItem("userId")
    eventApiManager.getAllEvents(userLogin).then(parsedEvent => {
    eventDomPrinter.printEventsToDOM(parsedEvent);
 });
}
export default eventAfterLoad