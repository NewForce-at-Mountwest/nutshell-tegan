 const loginButtonHTML = `<div class="button">
 <button id= "loginBTN">Login My Guy</button>
 </div>`

 const loginFormHTML = `<fieldset id ="loginForm">
 <legend>Login</legend>
 <div>
 <label>User Name</label><input type"text" id="userName"</div>
 <div>
  <label>Password</label><input type="text" id ="password">
 </div>
 `

 const buildLogin = {
     loginForm: () => { document.querySelector("#login-container").innerHTML += loginFormHTML },
     loginButton: () => { document.querySelector("#login-container").innerHTML += loginButtonHTML },

 }
 export default buildLogin;