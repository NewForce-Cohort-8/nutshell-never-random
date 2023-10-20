const applicationState =  {
    users: [],
    articles: [],
    images: [],
    messages: [],
    tasks: []
}

const API = "http://localhost:8088"
// 
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
