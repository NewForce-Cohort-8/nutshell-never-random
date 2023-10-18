import { getImages } from "./dataAccess.js";

const contentTarget = document.querySelector(".dashboard")

const render = () => {
    const images = getImages();
    contentTarget.innerHTML += `<div class="image-container">
    <h1 id="imageHeader"> Image Board </h1>
    ${
        images.map(image => {
            return `<section class ="image" id ="image ${image.id}">
            <img src = "${image.url}">
            <p class = "imageUser">${image.caption}</p>
            <hr>`
        }
        ).join("")
    }
    </div>`
}

export const imageHTML = () => {
    render()
}