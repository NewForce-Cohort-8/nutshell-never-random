import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import { fetchArticles } from "./dataAccess.js"
import { fetchImages } from "./dataAccess.js"
import { fetchMessages } from "./dataAccess.js"
import { fetchUsers } from "./dataAccess.js"
import { fetchTasks } from "./dataAccess.js"


/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/


const activeUser = sessionStorage.getItem("activeUser")

const render = () => {
    fetchArticles()
    fetchImages()
    fetchMessages()
    fetchUsers()
    fetchTasks()
    .then(() => {
        if(!activeUser){
            LoginForm()
            RegisterForm()
        } else {
            Nutshell()
        }
    })
}

render()
