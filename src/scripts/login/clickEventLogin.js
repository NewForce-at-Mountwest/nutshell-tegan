import loginApiManager from "./loginApiManager.js"
import buildLogin from "./loginDomPrint.js"
import loginPage from "./login.js"
import afterLoad from "../tasks/loadTaskContent.js"
import friendActivator from "../friends/friendActivator"
import messageApiManager from "../messageApiManager.js"
import messagesDomPrinter from "../messageDomPrinter.js"



const clickEventLogin = {
    handleLogin: () => {
        document.querySelector("body").addEventListener("click", () => {
            if (event.target.id === "loginBTN") {
                const userNameVal = document.querySelector("#userName").value
                const userPasswordVal = document.querySelector("#password").value
                console.log(userNameVal)


                loginApiManager.checkLogin(userNameVal)
                    .then(password => {
                        console.log(password)
                        if (password.length < 1) {
                            alert("USERNAME/PASSWORD AIN'T REAL MY GUY")
                        } else if (password[0].password === userPasswordVal) {
                            console.log("Good Job My Guy YEET!")
                            sessionStorage.setItem("userId", password[0].id)
                            document.querySelector("#login-container").innerHTML = ""
                                // call functions for everyone else
                            afterLoad();
                            friendActivator();
                            // print new message form to dom
                            messagesDomPrinter.printNewMessageFormToHTML();
                            // print old messages to dom
                            messageApiManager.getAllMessages().then(parsedMessages => {
                                // loop through the messages from json server
                                parsedMessages.forEach(message => {
                                    messagesDomPrinter.printSingleMessage(message)
                                })
                            });
                        }
                    })

            }
        })
    }
}
export default clickEventLogin