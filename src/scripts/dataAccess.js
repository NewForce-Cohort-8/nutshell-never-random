const applicationState = {
    users: [],
    articles: [],
    images: [],
    messages: [],
    tasks: [],
    events: []
}

const dashboard = document.querySelector(".dashboard")
const API = "http://localhost:8088"
const mainContainer = document.querySelector(".dashboard")


export const fetchUsers = () => {
    return fetch(`${API}/users`)
    .then(response => response.json())
    .then(
        (users) => {
            applicationState.users = users
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

export const fetchImages = () => {
    return fetch(`${API}/images`)
    .then(response => response.json())
    .then(
        (images) => {
            applicationState.images = images
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


export const getArticles  = () => {
    return applicationState.articles.map(article => ({...article}))
}

export const getImages  = () => {
    return applicationState.images.map(image => ({...image}))
}

export const fetchTasks = () => {
    return fetch(`${API}/tasks`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.tasks = data
            }
        )
}

export const getTasks = () => {
    return applicationState.tasks.map(task => ({...task}))
}

export const sendTask = (userTask) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userTask)
    }


    return fetch(`${API}/tasks`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteTask = (id) => {
    const mainContainer = document.querySelector(".dashboard")
    return fetch(`${API}/tasks/${id}`, { method: "DELETE" })
        .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
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

        export const deleteImage = (id) => {
            return fetch(`${API}/images/${id}`, { method: "DELETE" })
                .then(
                    () => {
                        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                    }
                )
            }
        
            export const saveImage = (newImage) => {
            const fetchOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newImage)
            }
            return fetch(`${API}/images`, fetchOptions)
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


      // Event stuff. - NH
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