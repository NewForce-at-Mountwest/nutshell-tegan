const clickEventLogin = {
    handleLogin: () => {
        document.querySelector("body")("click", () => {
            if (event.target.id === "loginBTN") {
                const userNameVal = document.querySelector("#userName").value
                const userPasswordVal = document.querySelector("#password").value
                console.log(userNameVal)


                loginApiManager.checkLogin(userNameVal)
                    .then(password => {
                        console.log(password)
                        console.log(passwordVal)
                    })
                if (password.length < 1) {
                    alert("USERNAME/PASSWORD AIN'T REAL MY GUY")
                } else if (password[0].password === userPasswordVal) {
                    console.log("Good Job My Guy YEET!")
                    sessionStorage.setItem("userId", password[0])
                    document.querySelector("#login-container").innerHTML = ""
                        // call functions for everyone else
                }
            }
        })
    }
}
export default clickEventLogin