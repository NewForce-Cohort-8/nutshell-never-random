import {LogOutButton} from "./auth/LogoutButton.js"
import { articleHTML } from "./articles.js"
import { imageHTML } from "./Images.js"

export const Nutshell = () => {

    return `${LogOutButton()}
    ${articleHTML()}
    ${imageHTML()}`

}