const eventDomPrinter = {
    printEventsToDOM: eventsArray => {
      document.querySelector("#event-container").innerHTML = "";
        document.querySelector("#event-container").innerHTML += `
          <h2>Events</h2>
        <ul id="events-list">
          </ul>
          <div class="input-field">
          <label>Name:</label><input type="text" id="event-create-name"><br>
          <label>Date:</label><input type="text" id="event-create-date"><br>
          <label>Location:</label><input type="text" id="event-create-location"><br>
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
        </div>
        </li>
        `;
      });
    }
  };

  export default eventDomPrinter;