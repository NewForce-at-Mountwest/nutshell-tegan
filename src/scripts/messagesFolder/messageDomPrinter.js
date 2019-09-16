import messageHtmlBuilder from "./singleMessage.js"

const messageDomPrinter = {
    printSingleMessage: (singleMessage) => {
        // build HTML string for individual message
        const messageHTMLString = messageHtmlBuilder.buildSingleMessage(singleMessage)

        // add HTML String to Dom
        document.querySelector("#chat-container").innerHTML += messageHTMLString;
    },
}

export default messageDomPrinter