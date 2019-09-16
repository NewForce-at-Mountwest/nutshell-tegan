const eventApiManager = {
    getAllEvents: () => {
      return fetch("http://localhost:8088/events").then(response =>
        response.json()
      )
    },

    getOneEvent: eventId => {
      return fetch(`http://localhost:8088/events/${eventId}`).then(response =>
        response.json()
      );
    },

    postOneEvent: singleEventObject =>
    fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(singleEventObject)
    }),

    deleteOneEvent: id =>
    fetch(`http://localhost:8088/events/${id}`, {
      method: "DELETE"
    }),

    editOneEvent: (id, eventObject) => {
      return  fetch(`http://localhost:8088/events/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(eventObject)
        })
  }
}

export default eventApiManager;