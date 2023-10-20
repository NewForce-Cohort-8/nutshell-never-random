const applicationState = {
    users: [],
    articles: [],
    images: [],
    messages: [],
    tasks: [],
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

export const fetchTasks = () => {
    return fetch(`${API}/tasks`)
    .then(response => response.json())
    .then(
        (tasks) => {
            applicationState.tasks = tasks
        }
    )
}

export const getArticles  = () => {
    return applicationState.articles.map(article => ({...article}))
}

export const getImages  = () => {
    return applicationState.images.map(image => ({...image}))
}

export const getMessages  = () => {
    return applicationState.messages.map(message => ({...message}))
}

export const getUsers  = () => {
    return applicationState.users.map(user => ({...user}))
}

export const getTasks  = () => {
    return applicationState.tasks.map(task => ({...task}))
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

