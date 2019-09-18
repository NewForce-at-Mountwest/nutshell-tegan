import messageApiManager from "./messageApiManager";

// HTML string for individual message
const messageHtmlBuilder = {
    buildSingleMessage: (singleMessage) => {
      return `
        <div class="message-card"
        <section id="message-card-${singleMessage.id}">
          <p>${singleMessage.user.name}:${singleMessage.message}</p>
          <button id="delete-message-${singleMessage.id}">Delete</button>
          <button id="edit-message-${singleMessage.id}">Edit</button>
        </section>
        </div>
          `
      }
};

export default messageHtmlBuilder
