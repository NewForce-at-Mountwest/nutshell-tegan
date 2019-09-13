 const loginButtonHTML = `<div> class="button">
 <button id= "loginBTN">Login My Guy</button>
 </div>`

 const loginFormHTML = `<fieldset> id ="loginForm">
 <legend>Login</legend>
 <div> <label>Password</label> <input type="password">
 </div>
 <fieldset>`

 const buildLogin = {
     loginForm: () => { document.querySelector("#login-container").innerHTML += loginFormHTML },
     loginButton: () => { document.querySelector("#login-container").innerHTML += loginButton },

 }
 export default buildLogin;