
const registerObject = {

    // Method to print registration form. Prints upon page load.
    printRegisterHTML: () => {

    document.querySelector("#login-container").innerHTML = `
    <section id="register-account-container">
    <div>Register New Account</div>
    <input id="register-username-input" type="text" placeholder="Type username here">
    <input id="register-email-input" type="text" placeholder="Type email here">
    <input id="register-password-input" type="text" placeholder="Type password here">
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