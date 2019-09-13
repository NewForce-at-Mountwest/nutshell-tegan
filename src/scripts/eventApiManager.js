const eventApiManager = {
    getAllEvents: () => {
      return fetch("http://localhost:8088/events").then(response =>
        response.json()
      )
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
}

export default eventApiManager;