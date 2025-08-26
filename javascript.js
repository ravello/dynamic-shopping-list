const userInput = document.querySelector("#userInput");
const btn = document.querySelector("#btn");
const theList = document.querySelector("#theList");

function addNewItem() {
    // create elements
    const newItem = document.createElement("li");
    const newButton = document.createElement("button");

    // edit elements
    newItem.textContent = userInput.value + " ";
    newButton.textContent = "Delete";
    newButton.setAttribute("class", "delete-btn");

    // append elements
    newItem.appendChild(newButton);
    theList.appendChild(newItem);

    // clear the input field
    userInput.value = "";
    userInput.focus();
    return;
}

// call addNewItem when the button is clicked
btn.addEventListener("click", addNewItem);
// call addNewItem when the Enter key is pressed (don't create a new line)
userInput.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        // Prevent the default action of enter (new line)
        e.preventDefault();
        addNewItem();
    }
});


// instead of adding an event listener to every button,
// we add an event listener to the <ul> itself

// this is called event delegation: When we attach an event listener 
// to a parent element to manage events from multiple child elements
theList.addEventListener("click", (e) => {
    // check if the clicked element belongs to the delete button class
    if (e.target.classList.contains("delete-btn")) {
        // if so, reach the parent <li> and remove it
        const listItemToRemove = e.target.parentElement;
        listItemToRemove.remove();
    }
});