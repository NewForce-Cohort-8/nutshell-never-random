//Authored by Colin Freeman Matteson the absolute goofiest coder of all time. This module takes the articles from the database and renders them to HTML once a user has logged in. Or it should, at least. Who knows if it actually works.

import {getArticles, deleteArticle, saveArticle} from "./dataAccess.js";

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener("click", click => {
    const newArticle = document.querySelector("#article-form");
//event listener for deleting articles via delete button
    if (click.target.id.startsWith("deleteArticle--")) {
        const [,requestId] = click.target.id.split("--")
        deleteArticle(parseInt(requestId))
    }
// toggle showing/hiding new article add form
    if (click.target.id === "new-article") {
        if (newArticle.style.display === "none") {
            newArticle.style.display = "block"
        } else {
        newArticle.style.display = "none";
        }
    }
// taking user form submissions, saving them to the API, setting the form's display back to hidden
    if (click.target.id === "submitRequest") {
       // Get what the user typed into the form fields
       const userNewsTitle = document.querySelector("input[name='newsTitle']").value;
       const userNewsURL = document.querySelector("input[name='newsURL']").value;
       const userNewsSynopsis = document.querySelector("input[name='newsSynopsis']").value;
       const timestamp = Date.now();
       // Make an object out of the user input
       const dataToSendToAPI = {
           title: userNewsTitle,
           url: userNewsURL,
           synopsis: userNewsSynopsis,
           timestamp: timestamp,
           userId: parseInt(sessionStorage.activeUser)
       }
       // Send the data to the API for permanent storage
       saveArticle(dataToSendToAPI)
       newArticle.style.display = "none"
    }
})

//rendering all news article related HTML, including the add article form, article content, and delete buttons
export const articleHTML = () => {
    const articles = getArticles();
    articles.sort((a,b) => {
        return b.timestamp - a.timestamp
    })
    return `<div class="article-container">
    <button id="new-article">New Article</button>
    <form id="article-form" style="display: none">
    <div class="field">
    <label class="label" for="newsTitle">Article Title</label>
    <br>
    <input type="text" name="newsTitle" class="input" />
    </div>
    <div class="field">
    <label class="label" for="newsURL">URL</label>
    <br>
    <input type="text" name="newsURL" class="input" />
    </div>
    <div class="field">
    <label class="label" for="newsSynopsis">Article Synopsis</label>
    <br>
    <input type="text" name="newsSynopsis" class="input" />
    </div>
    <button class="button" id="submitRequest">Submit Request</button>
    </form>
    ${
        articles.map(
            article => {
                return `<section class="article" id="article--${article.id}">
                <h2>${article.title}</h2>
                <button><a href="${article.url}" target="_blank">Read Now</a></button>
                <p><strong>Synopsis:</strong> ${article.synopsis}</p>
                <button class="request__delete"
                id="deleteArticle--${article.id}">
            Delete
        </button>
                </section>
                <hr>`
            }
        ).join("")}
    </div>`
}

