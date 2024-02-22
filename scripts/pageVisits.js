const pageVisitElement = document.querySelector("#visits");
const pageVisitsName = "pageVisits";

var pageVisits = JSON.parse(localStorage.getItem(pageVisitsName));

if(!pageVisits)
    pageVisits = 0;

pageVisitElement.textContent = `Page Visits: ${++pageVisits}`;

localStorage.setItem(pageVisitsName, pageVisits);