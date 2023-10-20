import { getImages, deleteImage, saveImage } from "./dataAccess.js";

const contentTarget = document.querySelector(".dashboard")
const mainContainer = document.querySelector(".dashboard")

mainContainer.addEventListener("click", click => {
    const newImage = document.querySelector("#image-form");
    if (click.target.id.startsWith("deleteImage--")) {
        const [,requestId] = click.target.id.split("--")
        deleteImage(parseInt(requestId))
    }

    if (click.target.id === "new-image") {
        if (newImage.style.display === "none") {
            newImage.style.display = "block"
        } else {
        newImage.style.display = "none";
        }
    }

    if (click.target.id === "submitImage") {
       // Get what the user typed into the form fields
       const userImageURL = document.querySelector("input[name='imageURL']").value;
       const userImageCaptions = document.querySelector("input[name='imageCaptions']").value;
       const timestamp = Date.now();
       // Make an object out of the user input
       const dataToSendToAPI = {
           url: userImageURL,
           caption: userImageCaptions,
           timestamp: timestamp,
           userId: parseInt(sessionStorage.activeUser)
       }
       // Send the data to the API for permanent storage
       saveImage(dataToSendToAPI)
    }
})

export const imageHTML = () => {
    const images = getImages();
    return `<div class="image-container">
    <button id="new-image">New Image</button>
    <form id="image-form" style="display: none">
    <div class="field">
    <label class="label" for="imageURL">URL</label>
    <br>
    <input type="text" name="imageURL" class="input" />
    </div>
    <div class="field">
    <label class="label" for="imageCaptions">Captions</label>
    <br>
    <input type="text" name="imageCaptions" class="input" />
    </div>
    <button class="button" id="submitImage">Submit Image</button>
    </form>
    <div class="image-container">
    <h1 id="imageHeader"> Image Board </h1>

    ${
        images.map(image => {
            return `<section class ="image" id ="image ${image.id}">
            <img src = "${image.url}">
            <p class = "imageUser">${image.caption}</p>
            <button class = "deleteImage"
            id="deleteImage--${image.id}">
            Delete image </button>
            </section>
            <hr>`
        }
        ).join("")
    }
    </div>`
}