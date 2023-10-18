import { getImages, getUsers } from "./dataAccess";

const contentTarget = document.querySelector("./dashboard")

const render = () => {
    const images = getImages();
    const users = getUsers();
    contentTarget.innerHTML += `<div class="image-container">
    <h1 id="imageHeader"> Image Board </h1>
    ${
        images.map(image => {
            const user = users.find(user => user.id === image.userId);
            return `<section class ="image" id ="image ${image.id}">
            <p class = "imageUser">${user}: ${image.image}</p>
            <hr>`
        }
        ).join("")
    }
    </div>`
}

export const imageHTML = () => {
    render()
}