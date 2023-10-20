import {LogOutButton} from "./auth/LogoutButton.js"
import { articleHTML } from "./articles.js"

export const Nutshell = () => {

    return `${LogOutButton()}

    ${articleHTML()}`

}