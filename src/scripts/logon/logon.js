// Building the log on function for the splash page//
import buildLogin from "./loginDomPrint"
import clickEventLogin from "./clickEventLogin"


const loginPage = () => {
    buildLogin.loginForm();
    buildLogin.loginButton();
}
export default loginPage