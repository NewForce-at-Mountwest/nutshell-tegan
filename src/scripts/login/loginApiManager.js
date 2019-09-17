// fetch single user object from DB fro login authenitcation, and returns user object

const loginApiManager = {
    checkLogin: (name) => {
        return fetch(` http://localhost:8088/users?name=${name}`).then(user => user.json())
    },
    allUsers: () => {
        return fetch("http://localhost8088/users").then(allUsers => allUsers.json())
    }
}
export default loginApiManager;
// returns a the users in db.json