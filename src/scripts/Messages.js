//Authored by Darrin Lee Daugherty, who is inferior to Colin Freeman Matteson in every way.

import {getMessages, getUsers, saveMessage, deleteMessage } from "./dataAccess.js";

const contentTarget = document.querySelector(".dashboard")
const mainContainer = document.querySelector(".dashboard")

mainContainer.addEventListener("click", click => {
    const newMessage = document.querySelector("#message-form");
    if (click.target.id.startsWith("deleteMessage--")) {
        const [,requestId] = click.target.id.split("--")
        deleteMessage(parseInt(requestId))
    }

   /* if (click.target.id === "new-message") {
        if (newMessage.style.display === "none") {
            newMessage.style.display = "block"
        } else {
        newArticle.style.display = "none";
        }
    } */

    if (click.target.id === "submitRequestMessage") {
       // Get what the user typed into the form fields
       const userMessage = document.querySelector("input[name='messageContent']").value;
       // Make an object out of the user input
       const dataToSendToAPI = {
           message: userMessage,
           userId: parseInt(sessionStorage.activeUser)
       }
       // Send the data to the API for permanent storage
       saveMessage(dataToSendToAPI)
       newMessage.style.display = "none"
    }
})

export const messageHTML = () => {
    const messages = getMessages();
    const users = getUsers();
    console.log(messages)
    return `<div id="message-form">
        <h1 id="messageHeader"> Message Board </h1>
    ${
        messages.map(message => {
                const user = users.find(user => user.id === message.userId);
                return `<section class="message" id="message-${message.id}">
                <p class="messageUser">${user.email}: ${message.message}</p>
                
                <button id="deleteMessage--${message.id}">Delete Message</button>
                </section>
                `
            }
        ).join("")}

        <div class="message-form">
        <input type="text" name="messageContent" class="messageContent" />
        <button id="submitRequestMessage">Post Message</button>
        </div>

    </div>`
}

