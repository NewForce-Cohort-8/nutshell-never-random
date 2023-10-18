//Authored by Darrin Lee Daugherty, who is inferior to Colin Freeman Matteson in every way.

import {getMessages, getUsers } from "./dataAccess.js";

const contentTarget = document.querySelector(".dashboard")

const render = () => {
    const messages = getMessages();
    const users = getUsers();
    contentTarget.innerHTML += `<div class="message-container">
        <h1 id="messageHeader"> Message Board </h1>
    ${
        messages.map(message => {
                const user = users.find(user => user.id === message.userId);
                return `<section class="message" id="message-${message.id}">
                <p class="messageUser">${user.email}: ${message.message}</p>
                </section>
                <hr>`
            }
        ).join("")}
    </div>`
}

export const messageHTML = () => {
    render()
}