import registerObject from "../registerFolder/register.js";
import loginPage from "./login/login.js"
import addClick from "./tasks/taskClickEvents.js"
import clickEventLogin from "./login/clickEventLogin.js"


import eventApiManager from "./eventApiManager.js";
import eventDomPrinter from "./eventDomPrinter.js";

// eventApiManager.getAllEvents().then(parsedEvent => {
//     eventDomPrinter.printEventsToDOM(parsedEvent);
// });

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
    location: eventLocationInput,
    userId: sessionStorage.getItem("userId")
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





// import registerObject from "../registerFolder/register.js"

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
loginPage();
const newUsernameValue = document.querySelector("#register-username-input").value;
const newEmailValue = document.querySelector("#register-email-input").value;
const registerNewUserObject = {
        name: newUsernameValue,
        email: newEmailValue
    }
    // registerObject.postNewUser(registerNewUserObject)
    // .then(() => {
    //     document.querySelector("#register-username-input").value = "";
    //     document.querySelector("#register-email-input").value = "";
    // })
    // }
    // });


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
          location: eventLocationInputValue,
          userId: 1
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
})