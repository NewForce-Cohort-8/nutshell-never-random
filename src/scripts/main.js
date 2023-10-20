import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import { fetchArticles } from "./dataAccess.js"
import { fetchEvents } from "./dataAccess.js"

/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/
const mainContainer = document.querySelector(".dashboard");
const activeUser = sessionStorage.getItem("activeUser")

const render = () => {
    fetchArticles()
    .then(fetchEvents)
        .then(() => {
            if(!activeUser){
                LoginForm()
                RegisterForm()
            } else {
                mainContainer.innerHTML = Nutshell()
            }
        })

}

render()

mainContainer.addEventListener(
    "stateChanged", 
    customEvent => {
        render()
    }
)