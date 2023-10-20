                // file coded by NH 

import { getEvents, saveEvent, deleteEvent } from "./dataAccess.js";

const mainContainer = document.querySelector(".dashboard");
const dashboard = document.querySelector(".dashboard");

export const eventHTML = () => {
    const events = getEvents()
    return `<div class="article-container">
    ${
        events.map
        (event => {
                return `<section class="article" id="article-${event.id}">
                <h2>${event.eventName}</h2>
                <button><a href="${event.url}" target="_blank">Events</a></button>
                <p><strong>Synopsis:</strong> ${event.location}</p>
                <button id="delete-event--${event.id}">delete event</button>
                </section>
                <hr>`
            }
                ).join("")}
    </div>`
};

    //delete event

dashboard.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("delete-event--")){
        const [,requestId] = clickEvent.target.id.split("--")
    deleteEvent(parseInt(requestId))
    }
}
);

    //create event form

export const eventForm = () => { 
    return`
   <label for="new-event-date">Date</label>
  <input type="date" name="new-event-date" id="new-event-date" class="input">

   <label for="new-event-name">Event</label>
  <input type="text" name="new-event-name" id="new-event-name" class="input"/>

  <label for="new-event-location">Location</label>
  <input type="text" name="new-event-location" id="new-event-location" class="input"/>

  <button id="createEvent" class="button">Add Event</button>`
};

    // Saves new event to api.

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "createEvent") {
        const newEventDate = document.querySelector("input[name='new-event-date']").value;
        const newEventName = document.querySelector("input[name='new-event-name']").value;
        const newEventLocation = document.querySelector("input[name='new-event-location']").value
        const newEvent = {
            name: newEventName,
            date: newEventDate,
            location: newEventLocation
        }
        saveEvent(newEvent)
    }
});