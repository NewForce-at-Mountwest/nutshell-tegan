import registerObject from "../registerFolder/register.js"
import messagesObject from "../messagesFolder/message.js"

// -----------BEGIN REGISTRATION CODE------------------//
// add registration form to dom
registerObject.printRegisterHTML();

// ------click event for registration save button------

document.querySelector("body").addEventListener("click", () =>{
 if(event.target.id === "register-save-btn"){

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


// -------------------BEGIN MESSAGES CODE------------------//
messagesObject.getAllMessages()

messagesObject.printNewMessageFormToHTML()