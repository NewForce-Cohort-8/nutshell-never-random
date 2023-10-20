import { LoginForm } from "./LoginForm.js"
import { RegisterForm } from "./RegisterForm.js"

const eventHub = document.querySelector(".dashboard")
const contentTarget = document.querySelector(".dashboard")

export const LogOutButton = () => {
    return `<button id="logout-button">Log Out</button>`
}

eventHub.addEventListener("click", (eventObject) => {
    if(eventObject.target.id === "logout-button"){
        // clear session storage
        sessionStorage.clear()

        // clear the DOM
        document.querySelector(".dashboard").dispatchEvent(new CustomEvent("stateChange"))
    }
})