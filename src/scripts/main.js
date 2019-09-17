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
})



//--------------NEWS-----------------------//


//Fetch all news entries from JSON and print them to the DOM
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

// ------ EDIT EVENT LISTENERS ------//
// Event listener for edit button
document.querySelector("body").addEventListener("click", () => {
  if (event.target.id.includes("edit-news")) {
    // Get the id of the thing we want to edit from the button's id attribute
    const wordArray = event.target.id.split("-");
    const editNewsId = wordArray[2];


    // Pass the id into apiManager to bring back the article to edit
    newsApiManager.getOneNews(editNewsId)
      .then(singleNews => {
        newsDomPrinter.printNewsEditForm(singleNews)
      })
  }
});

//Event listener for save button

document.querySelector("body").addEventListener("click", () => {
  if (event.target.id.includes("save-edit")) {
    // Get the id of the thing we want to edit
    const wordArray = event.target.id.split("-");
    const editedNewsId = wordArray[2];
    console.log(editedNewsId);

    // Get the value of the input
    const editedNewsTitleValue = document.querySelector(`#edit-title-input-${editedNewsId}`).value
    const editedNewsSynopsisValue = document.querySelector(`#edit-synopsis-input-${editedNewsId}`).value
    const editedNewsURLValue = document.querySelector(`#edit-URL-input-${editedNewsId}`).value



    //Create edited object to PUT
    const editedNewsObjectToPut = {
      title: editedNewsTitleValue,
      synopsis: editedNewsSynopsisValue,
      url: editedNewsURLValue
    };


    console.log("this is what we're going to send to the db", editedNewsObjectToPut)
    // Send to database
    newsApiManager.editOneNews(editedNewsId, editedNewsObjectToPut)
      .then(() => {
        newsApiManager.getAllNews()
          .then(parsedNews => {
            newsDomPrinter.printNewsToDOM(parsedNews)
          })
      });






    // ------- CLICK EVENT FOR DELETE BUTTONS ----------//
    // Event listener for delete button
    document.querySelector("body").addEventListener("click", () => {
      // If the user clicks on a delete button, do some stuff
      if (event.target.id.includes("delete-news")) {
        // get the unique id of the article you want to delete
        // remember that we gave our delete buttons id attributes of delete-student-uniqueId
        const wordArray = event.target.id.split("-");
        const newsId = wordArray[2];
        console.log(newsId);

        // Delete from json-server
        newsApiManager.deleteOneNews(newsId).then(() => {
          // Once the delete is completed, get all the students-- we need to "refresh" the page (kind of)
          newsApiManager.getAllNews()
            .then(parsedNews => {
              // When the students come back, print them to the DOM again
              newsDomPrinter.printNewsToDOM(parsedNews);
            })
        })
      }
    })
  }
})
