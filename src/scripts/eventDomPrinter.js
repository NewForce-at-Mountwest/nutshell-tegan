const eventDomPrinter = {
    printEventsToDOM: eventsArray => {
      document.querySelector("#event-container").innerHTML = "";
        document.querySelector("#event-container").innerHTML += `
          <h2 id="title">Events</h2>
        <ul id="events-list">
          </ul>
          <div class="event-input-field">
          <input type="text" id="event-create-name" placeholder="Name"><br>
          <label></label><input type="date" id="event-create-date"><br>
          <input type="text" id="event-create-location" placeholder="Location"><br>
          <button id="event-create-submit">Submit</button>
          </div>
          `
      eventsArray.forEach(singleEvent => {document.querySelector("#events-list").innerHTML += `
        <li class="single-event" id="single-event-${singleEvent.id}">
        <h3>${singleEvent.name}</h3>
        <p>${singleEvent.date}</p>
        <p>${singleEvent.location}</p>
        <div class="event-button-container">
        <button id="event-delete-${singleEvent.id}">Delete</button>
        <button id="event-edit-${singleEvent.id}">Edit</button>
        </div>
        </li>
        `;
      });
    },
    printEventEditForm: eventIdToEdit => {
      document.querySelector(`#single-event-${eventIdToEdit.id}`).innerHTML = `<section>
      <div class="event-input-edit-field">
        <label>Name:</label><input id="event-name-edit-input-${eventIdToEdit.id}" type="text" value="${eventIdToEdit.name}">
        <label>Date:</label><input id="event-date-edit-input-${eventIdToEdit.id}" type="date" value="${eventIdToEdit.date}">
        <label>Location:</label><input id="event-location-edit-input-${eventIdToEdit.id}" type="text" value="${eventIdToEdit.location}">
        <button id="event-save-edit-${eventIdToEdit.id}">Save</button>
        </div>
      </section>`

  }
  };

  export default eventDomPrinter;