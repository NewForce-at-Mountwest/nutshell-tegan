import newsApiManager from "./news/newsApiManager.js";
import newsDomPrinter from "./news/newsDomPrinter.js";
import eventApiManager from "./eventApiManager.js";
import eventDomPrinter from "./eventDomPrinter.js";
import registerObject from "../registerFolder/register.js";

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







registerObject.printRegisterHTML();


document.querySelector("body").addEventListener("click", () => {
    if (event.target.id === "register-save-btn") {

        // get the value of the username and email inputs
        const newUsernameValue = document.querySelector("#register-username-input").value;
        const newEmailValue = document.querySelector("#register-email-input").value;
        // Put input values into a new object
        const registerNewUserObject = {
            name: newUsernameValue,
            email: newEmailValue
        }
        // console.log(registerNewUserObject)
        // POST new user to database
        registerObject.postNewUser(registerNewUserObject)
            .then(() => {
                document.querySelector("#register-username-input").value = "";
                document.querySelector("#register-email-input").value = "";
            })
    }
});




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
})

//--------------NEWS-----------------------//
//Fetches all news entries from JSON and prints them to the DOM
newsApiManager.getAllNews().then(parsedNews => {
    // When the response comes back, send them into the printToDOM function
    newsDomPrinter.printNewsToDOM(parsedNews);
});




//-----------Saving News Articles to the Database-------------//
const newsSaveButton = document.querySelector("body");
// Add an event listener to the submit button
newsSaveButton.addEventListener("click", function () {
    // Inside the click event listener, use document.querySelector().value to capture what the user typed into the text input.
    if (event.target.id.includes("save-news-button")) {
        const newsTitleValue = document.querySelector("#newsTitleInput").value;
        const newsSynopsisValue = document.querySelector("#newsSynopsisInput").value;
        const newsURLValue = document.querySelector("#newsURLInput").value

        // Conver the input to an object to send to json-server
        const newsObjectToPost = {
            title: newsTitleValue,
            synopsis: newsSynopsisValue,
            url: newsURLValue
        };

        // POST  the news object to json-server and then refresh DOM to show all news articles
        newsApiManager
            .postOneNews(newsObjectToPost)
            .then(newsApiManager.getAllNews)
            .then(parsedNews => {
                newsDomPrinter.printNewsToDOM(parsedNews);
            });
    }
});

//-----------Editing News Articles to the Database-------------//

document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("edit-news")) {
        // Get the id of the thing we want to edit
        const wordArray = event.target.id.split("-");
        const editNewsId = wordArray[2];
        console.log(editNewsId);

        // Get the value of the input
        const editedNewsTitleValue = document.querySelector(`#edit-input-${editNewsId}`).value
        const editedNewsSynopsisValue = document.querySelector(`#edit-input-${editNewsId}`).value
        const editedNewsURLValue = document.querySelector(`#edit-input-${editNewsId}`).value


        // Put the input value into an object
        const editedNewsObj = {
            title: editedNewsTitleValue,
            synopsis: editedNewsSynopsisValue,
            url: editedNewsURLValue
        }

        console.log("this is what we're going to send to the db", editedNewsObj)
        // Send to database w/ PUT method
        apiManager.editOneNews(editNewsId, editedNewsObj)
            .then(() => {
                apiManager.getAllNews()
                    .then(parsedNews => {
                        newsDomPrinter.printNewsToDOM(parsedNews)
                    })
                })
            }
        }
)