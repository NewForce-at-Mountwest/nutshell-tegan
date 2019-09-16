import messageHtmlBuilder from "./singleMessage.js"

const messageDomPrinter = {
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
    printSingleMessage: (singleMessage) => {
        // build HTML string for individual message
        const messageHTMLString = messageHtmlBuilder.buildSingleMessage(singleMessage)

        // add HTML String to Dom
        document.querySelector("#chat-container").innerHTML += messageHTMLString;
    },
}

export default messageDomPrinter