const applicationState =  {
    users: [],
    articles: [],
    images: [],
    messages: [],
    tasks: [],
    events: []
}

const dashboard = document.querySelector(".dashboard")
const API = "http://localhost:8088"

export const fetchUsers = () => {
    return fetch(`${API}/users`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.users = data
            }
        )
}

export const fetchArticles = () => {
    return fetch(`${API}/articles`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.articles = data
            }
        )
}

export const fetchImages = () => {
    return fetch(`${API}/images`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.images = data
            }
        )
}

export const fetchMessages = () => {
    return fetch(`${API}/messages`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.messages = data
            }
        )
}

export const fetchEvents = () => {
    return fetch(`${API}/events`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.events = data
            }
        )
}

export const getArticles = () => {
    return applicationState.articles.map(article => ({...article}))
}

      //Event stuff.- NH
export const getEvents = () => {
    return applicationState.events.map(event => ({...event}))
}

export const deleteEvent = (id) => {
    return fetch(`${API}/events/${id}`, {method: "DELETE"})
    .then(() => {
        dashboard.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const saveEvent = (event) => {
    const fetchOptions = {
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(event)
    }


        return fetch(`${API}/events`, fetchOptions)
        .then(response => response.json)
        .then(() => {
            dashboard.dispatchEvent(new CustomEvent("stateChanged"))
        })}