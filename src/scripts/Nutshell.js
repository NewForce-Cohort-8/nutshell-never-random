import {LogOutButton} from "./auth/LogoutButton.js"
import { articleHTML } from "./articles.js"
import { imageHTML } from "./Images.js"
import { taskHTML } from "./tasks.js"
import { messageHTML } from "./Messages.js"

export const Nutshell = () => {

  return `${LogOutButton()}
    ${articleHTML()}
    ${messageHTML()}
    ${taskHTML()}
    ${imageHTML()}`

}