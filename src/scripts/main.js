
import loginPage from "./login/login.js"
import addClick from "./tasks/taskClickEvents.js"
import clickEventLogin from "./login/clickEventLogin.js"


import eventApiManager from "./eventApiManager.js";
import eventDomPrinter from "./eventDomPrinter.js";
import registerObject from "./register.js";
import messagesDomPrinter from "./messageDomPrinter.js";
import messageApiManager from "./messageApiManager.js";
import messageDomPrinter from "./messageDomPrinter.js";



// ---------BEGIN REGISTRATION FORM CODE----//

registerObject.printRegisterHTML();


document.querySelector("body").addEventListener("click", () => {
    if (event.target.id === "register-save-btn") {

        // get the value of the username and email inputs
        const newUsernameValue = document.querySelector("#register-username-input").value;
        const newEmailValue = document.querySelector("#register-email-input").value;
        const newUserPass = document.querySelector("#register-password-input").value
            // Put input values into a new object
        const registerNewUserObject = {
                name: newUsernameValue,
                email: newEmailValue,
                password: newUserPass,
            }
            // console.log(registerNewUserObject)
            // POST new user to database
        registerObject.postNewUser(registerNewUserObject)
            .then(() => {
                document.querySelector("#register-username-input").value = "";
                document.querySelector("#register-email-input").value = "";
                document.querySelector("#register-password-input").value = "";
            })
    }
});
// ------------------END REGISTRATION CODE----------------//



// login handler
loginPage();
clickEventLogin.handleLogin();


// tasks handler
addClick.deleteClick()
addClick.addNewTask()


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

    if (event.target.id.includes("event-edit")) {
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

    if (event.target.id.includes("event-save-edit")) {

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


// -------------------BEGIN MESSAGES/CHAT CODE------------------//


// collect form input values to create a new message in database
// use doc.querySel to select input filed
// use value property on inputs to get text that you typed
document.querySelector("body").addEventListener("click", () => {
    if(event.target.id === "message-save-btn"){
    const messageInput = document.querySelector("#message-text-input").value;

    const newMessage = {
    userId: sessionStorage.getItem("userId"),
    message: messageInput,
    };
    //   using POST method to create new json data
// fetch to create the new message in the api
messageApiManager.saveMessage(newMessage)
.then(messageApiManager.getAllMessages)
.then(parsedMessages => {
    document.querySelector("#chat-container").innerHTML = ""
    messageDomPrinter.printNewMessageFormToHTML()
    // loop through messages from json server
    parsedMessages.forEach(message => {
        messageDomPrinter.printSingleMessage(message)
    });
    });
    }
})

// click event for delete button
// add event listener to the body element bc the delete button does not exist upon page load
document.querySelector("body").addEventListener("click", () => {
    // if user clicks on delete button, then things happen
    if(event.target.id.includes("delete-message")) {
        // get the unique id of the entry you want to delete
        // remember that we gave our delete buttons id attributes of delete-message-uniqueId
        const wordArray = event.target.id.split("-");
        const idOfThingWeWantToDelete = wordArray[2];
        console.log(idOfThingWeWantToDelete);
        // make a DELETE request to our json server
        messageApiManager.deleteOneMessage(idOfThingWeWantToDelete).then(() => {
            // once the delete is completed, get all messages again
            messageApiManager.getAllMessages().then(parsedMessages => {
                document.querySelector("#chat-container").innerHTML = ""
                messageDomPrinter.printNewMessageFormToHTML()
                parsedMessages.forEach(message => {
                    messageDomPrinter.printSingleMessage(message)
                });
            });
        })
    }
})

// event listener for edit button
document.querySelector("body").addEventListener("click", () => {
    if(event.target.id.includes("edit-message")){
        const wordArray = event.target.id.split("-");
        const idOfThingWeWantToEdit = wordArray[2];
        console.log(idOfThingWeWantToEdit)

        // pass that id into the Apimanager to bring back the message we want to edit
        messageApiManager.getOneMessage(idOfThingWeWantToEdit).then(singleMessage => {
            messageDomPrinter.printMessageEditForm(singleMessage)
        })
    }
});

// event listener for the edit save button
document.querySelector("body").addEventListener("click", () => {
    if(event.target.id.includes("editedmessage-save")){
        const wordArray = event.target.id.split("-");
        const idOfThingWeWantToEdit = wordArray[3];
        console.log(idOfThingWeWantToEdit);
        // get the value of the input
        const editedMessageValue = document.querySelector(`#message-text-${idOfThingWeWantToEdit}`).value
        // put the input value into an object
        const editedMessageObject = {
            userId: 1,
            message: editedMessageValue
        }
        // send to the db with the PUT method
        messageApiManager.editOneMessage(idOfThingWeWantToEdit, editedMessageObject).then(() => {
            // once the edit is completed, get all messages again
            messageApiManager.getAllMessages().then(parsedMessages => {
                document.querySelector("#chat-container").innerHTML = ""
                messageDomPrinter.printNewMessageFormToHTML()
                // loop through the messages from json server
                parsedMessages.forEach(message => {
                    messageDomPrinter.printSingleMessage(message)
                });
            });
        })
    }
})

// ----------END MESSAGES/CHAT CODE-------------------//
