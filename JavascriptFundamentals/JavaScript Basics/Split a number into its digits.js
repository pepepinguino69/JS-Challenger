// assign the correct elements to the variables
const buttonElem = document.querySelectorAll("#wrapper button")
const inputElem = document.querySelectorAll("#wrapper input")

buttonElem.addEventListener('click', () => {
  const oldText = inputElem.value;
    return inputElem.value = oldText === "ON" ? "OFF" : "ON";
});
