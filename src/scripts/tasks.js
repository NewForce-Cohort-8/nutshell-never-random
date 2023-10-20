// Tasks built by A-Nya :))

import {getTasks, sendTask, deleteTask} from "./dataAccess.js";



export const taskHTML = () => {
    const tasks = getTasks();
    return `<div class="task-container">
   <button id="addTask" >Add Task</button>
<form id="taskForm" style = "display:none">
        <div class="field">
            <label class="label" for="userTask">Task Name</label>
            <input type="text" name="userTask" id="userTask" class="input" />
        </div>
        <div class="field">
            <label class="label" for="userComplete">Is it Complete?</label>
            <input type="text" name="userComplete" id="userComplete"class="input" />
        </div>
        <div class="field">
            <label class="label" for="completionDate">Date to be completed by: </label>
            <input type="date" name="completionDate" id="completionDate" class="input" />
        </div>

        <button class="button" id="saveTask">Save Task</button>
    </form>
    ${
        tasks.map(
            task => {
                return `<section class="task" id="task-${task.id}">
                <p>${task.task}</p>
                <div>
                <input class="form-check-input" id="deleteTask-${task.id}" type="checkbox" value="">
              </div>
              
                </section>
                <hr>`
            }
        ).join("")}
    </div>`
}

const mainContainer = document.querySelector(".dashboard")



mainContainer.addEventListener("click", clickEvent => {
  const taskForm = document.querySelector("#taskForm")
  if (clickEvent.target.id === "addTask"){
    if (taskForm.style.display === "none"){
      taskForm.style.display = "block"
    } else{
      taskForm.style.display = "none"
    }
   
  } 
  if (clickEvent.target.id.startsWith("deleteTask")){
    const [,requestId] = clickEvent.target.id.split("-")
      deleteTask(parseInt(requestId))
     
  } 
  if (clickEvent.target.id === "saveTask") {
        // Get what the user typed into the form fields
        const userTask = document.querySelector("input[name='userTask']").value
        const userComplete = document.querySelector("input[name='userComplete']").value
        const completionDate = document.querySelector("input[name='completionDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
          task: userTask,
          complete: userComplete,
          completionDate: completionDate,
          userId: parseInt(sessionStorage.activeUser)
        }

        // Send the data to the API for permanent storage
        sendTask(dataToSendToAPI)
    }
   
})

 
