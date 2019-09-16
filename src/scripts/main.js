
import eventApiManager from "./eventApiManager.js";
import eventDomPrinter from "./eventDomPrinter.js";
import registerObject from "./register.js";
import messagesDomPrinter from "./messageDomPrinter.js";
import messageApiManager from "./messageApiManager.js";



// ---------BEGIN REGISTRATION FORM CODE----//
registerObject.printRegisterHTML();

// Add click event to registration save button//
document.querySelector("body").addEventListener("click", () =>{
 if(event.target.id === "register-save-btn"){
// get value of input fields
const newUsernameValue = document.querySelector("#register-username-input").value;
const newEmailValue = document.querySelector("#register-email-input").value;
// create new object with values from input fields//
const registerNewUserObject = {
    name: newUsernameValue,
    email: newEmailValue
}
// post new registered user to json server by calling method and then clear the input fields//
registerObject.postNewUser(registerNewUserObject)
.then(() => {
    document.querySelector("#register-username-input").value = "";
    document.querySelector("#register-email-input").value = "";
})
}
});
// -------END REGISTRATION FORM CODE------///


  eventApiManager.getAllEvents().then(parsedEvent => {
  eventDomPrinter.printEventsToDOM(parsedEvent);
});

//listen for click on post button

document.querySelector("body").addEventListener("click", () => {
  if (event.target.id.includes("event-create-submit")) {

  const eventNameInput = document.querySelector("#event-create-name").value;
  const eventDateInput = document.querySelector("#event-create-date").value;
  const eventLocationInput = document.querySelector("#event-create-location").value;

//create object to post

  const eventToPost = {
    name: eventNameInput,
    date: eventDateInput,
    location: eventLocationInput
  };

//posting request

  eventApiManager
    .postOneEvent(eventToPost)
    .then(eventApiManager.getAllEvents)
    .then(parsedEvent => {

      //re print the events
      eventDomPrinter.printEventsToDOM(parsedEvent);
    });
}
});

//delete button

document.querySelector("body").addEventListener("click", () => {

//see if clicked on a delete button

  if (event.target.id.includes("event-delete")) {

    // find the id of the selected delete button

    const wordArray = event.target.id.split("-");
    const eventIdToDelete = wordArray[2];

    //delete request

    eventApiManager.deleteOneEvent(eventIdToDelete).then(() => {
      eventApiManager.getAllEvents()
      .then(parsedEvents => {

//re print the events

        eventDomPrinter.printEventsToDOM(parsedEvents);
      });
    });
  }
});

//edit button

document.querySelector("body").addEventListener("click", () => {

  //see if clicked on an edit button

  if(event.target.id.includes("event-edit")){
      const wordArray = event.target.id.split("-");
      const eventIdToEdit = wordArray[2];

//get the info from selected event

      eventApiManager.getOneEvent(eventIdToEdit)
      .then(singleEvent => {

//print input field for editing event

          eventDomPrinter.printEventEditForm(singleEvent)


      })

  }
})

//edit save button

document.querySelector("body").addEventListener("click", () => {

//make sure button is an event save button

  if(event.target.id.includes("event-save-edit")){

//get button id

      const wordArray = event.target.id.split("-");
      const eventIdToEdit = wordArray[3];

//get the edited input value

      const eventNameInputValue = document.querySelector(`#event-name-edit-input-${eventIdToEdit}`).value
      const eventDateInputValue = document.querySelector(`#event-date-edit-input-${eventIdToEdit}`).value
      const eventLocationInputValue = document.querySelector(`#event-location-edit-input-${eventIdToEdit}`).value

//create an object to make put request

      const editedEventObject = {
          name: eventNameInputValue,
          date: eventDateInputValue,
          location: eventLocationInputValue
      }

      //create put reqeust

      eventApiManager.editOneEvent(eventIdToEdit, editedEventObject)
      .then(() => {
          eventApiManager.getAllEvents()
          .then(allEvents => {

            //re print all the events

              eventDomPrinter.printEventsToDOM(allEvents)
          })
      })
  }
});


// -------------------BEGIN MESSAGES CODE------------------//
// print new message form to dom
messagesDomPrinter.printNewMessageFormToHTML();
// print old messages to dom
messageApiManager.getAllMessages().then(parsedMessages => {
  // loop through the messages from json server
  parsedMessages.forEach(message => {
    messagesDomPrinter.printSingleMessage(message)
  })
});

// collect form input values
// use doc.querySel to select input filed
// use value property on inputs to get text that you typed
// document.querySelector("#message-save-btn").addEventListener("click", function() {
//   const messageInput = document.querySelector("#message-text-input").value;


//   const newMessage = {
//     text: messageInput
//   }
// })


// ----------END MESSAGES CODE-------------------//