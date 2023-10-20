import {LogOutButton} from "./auth/LogoutButton.js"
import { articleHTML } from "./articles.js"
import { eventHTML, eventForm } from "./events.js"


export const Nutshell = () => {

    return `${LogOutButton()}
    ${articleHTML()}
    ${eventForm()}
    ${eventHTML()}`

}