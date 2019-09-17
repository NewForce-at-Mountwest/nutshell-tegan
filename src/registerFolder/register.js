// a user wants to use Nutshell
// When the user first accesses the application
// Then the user should see a welcome message
// And a hyperlink to the registration form

// Given a user wants to register an account with Nutshell
// When the user clicks the Register a new account hyperlink
// Then a registration form should be displayed where the user can enter in an email address and a username

// Given a user has filled out both fields of the registration form
// When the user clicks the Register button
// Then the system should check if the username is unique
// And it should check if the email address is unique
// And if both are unique, a new account should be created
// And the user should be taken to the main view of Nutshell


const registerObject = {

    // Method to print registration form. Prints upon page load.
    printRegisterHTML: () => {

        document.querySelector("#login-container").innerHTML = `
<section id="register-account-container">
<div>Register New Account</div>
<input id="register-username-input" type="text" placeholder="Type username here">
<input id="register-email-input" type="text" placeholder="Type email here">
<input id="register-password-input" type="text" placeholder="Type Password">
<button id="register-save-btn">Submit</button>
</section>
`
    },

    // Method to post new user
    postNewUser: newUserObject => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserObject)
        });
    }

};

export default registerObject;