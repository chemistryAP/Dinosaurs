const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const dow = date.getDay();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dowName = weekdays[dow];
document.getElementById("dayinfo").textContent = dowName + " "+ day + "-" + month + "-" + year;