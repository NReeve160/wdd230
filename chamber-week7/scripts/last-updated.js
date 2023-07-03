document.getElementById("currentYear").innerHTML = new Date().getFullYear();
document.getElementById("updatedDate").innerHTML = new Date(document.lastModified).toLocaleString();

// select the DOM elements to manipulate (we will output to these)
const datefield = document.querySelector(".current-date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// "full" or long, medium, short options ... try them

datefield.textContent = fulldate;
document.querySelector(".current-date").style.textAlign = "center";
document.querySelector(".current-date").style.gridColumn = "1 / span 4";

document.querySelector(".announcement").style.display = "none";

const day = now.getDay();
console.log(day);

if (day == 1 || 2) {
	document.querySelector(".announcement").style.display = "block";
}