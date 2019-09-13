const clickEventLogin = {
    handleLogin: () => {
        document.querySelector("#login-container")("click", () => {
            if (event.target.id === "login") {
                const userNameVal = document.querySelector("#userName").value
                const userPasswordVal = document.querySelector("#password").value
                console.log(userNameVal)


                loginApiManager.checkLogin(userNameVal)
                    .then(password => {
                        console.log(password)
                        console.log(passwordVal)
                    })
                if (password.lenght < 1) {
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