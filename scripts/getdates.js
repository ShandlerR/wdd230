const lastMod = document.getElementById("lastModified");
const year = document.getElementById("year");

let lastModDate = new Date(document.lastModified);
let currentDate = new Date().getFullYear();

lastMod.innerHTML = lastModDate;
year.innerHTML = currentDate;