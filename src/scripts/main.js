import newsApiManager from "./news/newsApiManager.js"
import newsDomPrinter from "./news/newsDomPrinter.js";
import registerObject from "../registerFolder/register.js"

// -----------BEGIN REGISTRATION CODE------------------//
// add registration form to dom
registerObject.printRegisterHTML();

// ------click event for registration save button------

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
// ------------------END REGISTRATION CODE----------------//
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
},

);

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
    },



newsApiManager.printNewsEditForm
























// // ------- CLICK EVENT FOR DELETE BUTTONS ----------//
// // Add an event listener to the body element because the delete buttons are loaded dynamically-- they don't exist on page load!
// document.querySelector("body").addEventListener("click", () => {
//     // If the user clicks on a delete button, do some stuff
//     if (event.target.id.includes("delete-student")) {
//         // get the unique id of the person you want to delete
//         // remember that we gave our delete buttons id attributes of delete-student-uniqueId
//         const wordArray = event.target.id.split("-");
//         const idOfThingWeWantToDelete = wordArray[2];
//         console.log(idOfThingWeWantToDelete);

//         // Make a DELETE request to our json-server
//         apiManager.deleteOneStudent(idOfThingWeWantToDelete).then(() => {
//             // Once the delete is completed, get all the students-- we need to "refresh" the page (kind of)
//             apiManager.getAllStudents()
//                 .then(parsedStudents => {
//                     // When the students come back, print them to the DOM again
//                     domPrinter.printStudentsToDOM(parsedStudents);
//                 });
//         });
//     }
// });

// newsApiManager.getOneStudent(newsId)

// // ------ EDIT EVENT LISTENERS ------//
// // Event listener for edit button
// document.querySelector("body").addEventListener("click", () => {
//     if (event.target.id.includes("edit-news")) {
//         // Get the id of the thing we want to edit from the button's id attribute
//         const wordArray = event.target.id.split("-");
//         const currentNewsId = wordArray[2];


//         // Pass that id into our apiManager to bring back the student we want to edit
//         apiManager.getOneStudent(currentNewsId)
//             .then(singleStudent => {
//                 domPrinter.printStudentEditForm(singleStudent)


//             })

//     }
// })


// // Event listener for submit button

// document.querySelector("body").addEventListener("click", () => {
//     if (event.target.id.includes("save-edit")) {
//         // Get the id of the thing we want to edit
//         const wordArray = event.target.id.split("-");
//         const idOfThingWeWantToEdit = wordArray[2];
//         console.log(idOfThingWeWantToEdit);

//         // Get the value of the input
//         const editedInputValue = document.querySelector(`#edit-input-${idOfThingWeWantToEdit}`).value


//         // Put the input value into an object
//         const editedStudentObj = {
//             name: editedInputValue
//         }

//         console.log("this is what we're going to send to the db", editedStudentObj)
//         // Send to database w/ PUT method
//         apiManager.editOneStudent(idOfThingWeWantToEdit, editedStudentObj)
//             .then(() => {
//                 apiManager.getAllStudents()
//                     .then(allStudents => {
//                         domPrinter.printStudentsToDOM(allStudents)
//                     })
//             })



//         // Once the PUT is complete, GET all the students from the db
//         // Once they students come back from the db, print them to the DOM

//     }
// })



