import {LogOutButton} from "./auth/LogoutButton.js"
import { articleHTML } from "./articles.js"
import { taskHTML } from "./tasks.js"

export const Nutshell = () => {

    return `${LogOutButton()}
    ${articleHTML()}
    ${taskHTML()}`

}