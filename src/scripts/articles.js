//Authored by Colin Freeman Matteson the absolute goofiest coder of all time. This module takes the articles from the database and renders them to HTML once a user has logged in. Or it should, at least. Who knows if it actually works.

import {getArticles} from "./dataAccess.js";

const contentTarget = document.querySelector(".dashboard")

const render = () => {
    const articles = getArticles();
    contentTarget.innerHTML += `<div class="article-container">
    ${
        articles.map(
            article => {
                return `<section class="article" id="article-${article.id}">
                <h2>${article.title}</h2>
                <button><a href="${article.url}" target="_blank">Read Now</a></button>
                <p><strong>Synopsis:</strong> ${article.synopsis}</p>
                </section>
                <hr>`
            }
        ).join("")}
    </div>`
}

export const articleHTML = () => {
    render()
}

