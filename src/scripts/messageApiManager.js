// methods to interface with api for messages section//

const messageApiManager = {
    getAllMessages: () => {
        // fetch messages from json server and parse them to js
        return fetch("http://localhost:8088/messages?_expand=user")
        .then(response => response.json());
    },
    getOneMessage: messageId => {
        return fetch(`http://localhost:8088/messages/${messageId}`)
        .then(response => response.json());
    },
    saveMessage: (newMessage) => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        });
    },
    deleteOneMessage: (idToDelete) => {
        return fetch(`http://localhost:8088/messages/${idToDelete}`, {
        method: "DELETE"
    });
    },
    editOneMessage: (id, messageObject) => {
        return fetch(`http://localhost:8088/messages/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObject)
        });
    }
};

export default messageApiManager