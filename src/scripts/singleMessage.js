
// HTML string for individual message
const messageHtmlBuilder = {
    buildSingleMessage: (singleMessage) => {
        return `
        <div class="message-card"
        <section id="message-card-${singleMessage.id}">
        <h2 id="message-header">Messages</h2>
          <p>${singleMessage.userId}:${singleMessage.message}</p>
          <button id="delete-message-${singleMessage.id}">Delete</button>
          <button id="edit-message-${singleMessage.id}">Edit</button>
        </section>
        </div>
          `
      }
};

export default messageHtmlBuilder