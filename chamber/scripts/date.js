// get the current copy year for copyright 
let currentYear = new Date().getFullYear();
const copyright = document.getElementById("copyRight").innerHTML = currentYear;

// last modified date:
let lastModified = document.lastModified;
const modified = document.getElementById("lastModified").innerHTML = lastModified;
