const applicationState = {
    users: [],
    messages: [],
    articles: [],
    tasks: [],
    events: [],
    images: []
}

const API = "http://localhost:8088"

export const fetchUsers = () => {
    return fetch(`${API}/users`)
        .then(response => response.json())
        .then(
            (users) => {
                applicationState.users = users
            }
        )
}

export const fetchMessages = () => {
    return fetch(`${API}/messages`)
        .then(response => response.json())
        .then(
            (messages) => {
                applicationState.messages = messages
            }
        )
}

export const fetchArticles = () => {
    return fetch(`${API}/articles`)
        .then(response => response.json())
        .then(
            (articles) => {
                applicationState.articles = articles
            }
        )
}

export const fetchEvents = () => {
    return fetch(`${API}/Events`)
        .then(response => response.json())
        .then(
            (events) => {
                applicationState.events = events
            }
        )
}

export const fetchTasks = () => {
    return fetch(`${API}/Tasks`)
        .then(response => response.json())
        .then(
            (tasks) => {
                applicationState.tasks = tasks
            }
        )
}

export const fetchImages = () => {
    return fetch(`${API}/images`)
        .then(response => response.json())
        .then(
            (images) => {
                applicationState.images = images
            }
        )
}