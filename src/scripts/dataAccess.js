const applicationState =  {
    users: [],
    articles: [],
    images: [],
    messages: [],
    tasks: []
}

const API = "http://localhost:8088"
const mainContainer = document.querySelector(".dashboard")


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

export const getMessages = () => {
    return applicationState.messages.map(message => ({...message}))
}

export const getUsers = () => {
    return applicationState.users.map(user => ({...user}))
}

export const deleteArticle = (id) => {
    return fetch(`${API}/articles/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const saveArticle = (newArticle) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newArticle)
    }


    return fetch(`${API}/articles`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteMessage = (id) => {
    return fetch(`${API}/messages/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const saveMessage = (newMessage) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage)
    }


    return fetch(`${API}/messages`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
