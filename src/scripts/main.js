
import eventApiManager from "./eventApiManager.js";
import eventDomPrinter from "./eventDomPrinter.js";

  eventApiManager.getAllEvents().then(parsedEvent => {
  eventDomPrinter.printEventsToDOM(parsedEvent);
});
document.querySelector("body").addEventListener("click", () => {
  if (event.target.id.includes("event-create-submit")) {

  const eventNameInput = document.querySelector("#event-create-name").value;
  const eventDateInput = document.querySelector("#event-create-date").value;
  const eventLocationInput = document.querySelector("#event-create-location").value;

  const eventToPost = {
    name: eventNameInput,
    date: eventDateInput,
    location: eventLocationInput
  };

  eventApiManager
    .postOneEvent(eventToPost)
    .then(eventApiManager.getAllEvents)
    .then(parsedEvent => {
      eventDomPrinter.printEventsToDOM(parsedEvent);
    });
}
});

document.querySelector("body").addEventListener("click", () => {
  // If the user clicks on a delete button, do some stuff
  if (event.target.id.includes("event-delete")) {
    // get the unique id of the person you want to delete
    // remember that we gave our delete buttons id attributes of delete-student-uniqueId
    const wordArray = event.target.id.split("-");
    const eventIdToDelete = wordArray[2];
    console.log(eventIdToDelete);

    // Make a DELETE request to our json-server
    eventApiManager.deleteOneEvent(eventIdToDelete).then(() => {
        // Once the delete is completed, get all the students-- we need to "refresh" the page (kind of)
      eventApiManager.getAllEvents()
      .then(parsedEvents => {
          // When the students come back, print them to the DOM again
        eventDomPrinter.printEventsToDOM(parsedEvents);
      });
    });
  }
});