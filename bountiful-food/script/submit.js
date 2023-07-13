// Get the button element
const button = document.getElementById("myButton");

// Add an event listener to the button
button.addEventListener("click", () => {
  // Get the current value of the local storage key
  const currentValue = localStorage.getItem("buttonClicks");

  // If the value is not null, add the current click count to it
  if (currentValue) {
    currentValue = currentValue + 1;
  } else {
    currentValue = 1;
  }

  // Set the new value of the local storage key
  localStorage.setItem("buttonClicks", currentValue);
});