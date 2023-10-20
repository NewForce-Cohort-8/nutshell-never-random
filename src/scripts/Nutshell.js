import {LogOutButton} from "./auth/LogoutButton.js"
import { articleHTML } from "./articles.js"
import { messageHTML } from "./Messages.js"

export const Nutshell = () => {

  return `${LogOutButton()}
    ${articleHTML()}
    ${messageHTML()}
    `

}