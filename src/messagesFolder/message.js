// Jessica Ayerst (author)
// Acceptance Criteria:
// Given a user wants to enter in a chat message
// When the user activates their account
// And enters a message into the New message text input
// Then their message should appear in the Chat area, prepended with the user's name

// Given a user is viewing, or entering in chat messages
// When a new message is entered by any user, and there are more messages than can fit in the default size of the chat history
// Then the most recent message should always be made visible at the bottom of the chat history

// Given a user enters in a chat message
// When the message appears in the chat history
// Then there should be an affordance to edit the message

// Given a user wants to edit a previous message of theirs
// When the user performs a gesture on the edit affordance
// Then the user should be able to change the text of their message
// And have an affordance for saving the edited message

const messagesObject = {

    // Method to print message form.
    printMessagesHTML: () => {

    document.querySelector("#login-container").innerHTML = `
    <section id="register-account-container">
    <div>Register New Account</div>
    <input id="register-username-input" type="text" placeholder="Type username here">
    <input id="register-email-input" type="text" placeholder="Type email here">
    <button id="register-save-btn">Submit</button>
    </section>
    `
    },