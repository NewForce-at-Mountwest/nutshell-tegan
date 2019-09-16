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

    // // Method to print message form for new messages.
    printNewMessageFormToHTML: () => {

    document.querySelector("#chat-container").innerHTML = `
    <section id="new-message-container">
    <div>Enter New Message</div>
    <input id="message-text-input" type="text" placeholder="Type new message here">
    <button id="message-save-btn">Submit</button>
    </section>
    `
    },

    getAllMessages: () => {
        return fetch("http://localhost:8088/messages")
        .then(response => response.json());
    }


};
export default messagesObject;