const eventApiManager = {
  getAllEvents: (userId) => {
    return fetch(`http://localhost:8088/events?userId=${userId}`).then(response =>
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

  deleteOneEvent: id => {
    return fetch(`http://localhost:8088/events/${id}`, {
      method: "DELETE"

    })
  },

  editOneEvent: (id, eventObject) => {
    return fetch(`http://localhost:8088/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(eventObject)
    })
  }
}

export default eventApiManager;