const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const inputError = document.querySelector("#input-error");

function addTask () {
    //if the input box is empty, we display the error message
    if (inputBox.value === ""){
        inputError.style.display = "block";
    }
    else {
        //otherwise if hide the error message and display the input message.
        inputError.style.display = "none";
        //create li variable to create one html element with tag name li
        let li = document.createElement("li");
        //adding the text value that's added in input field
        li.innerHTML= inputBox.value;
        //Displaying the text we created in list-container under listContainer
        listContainer.appendChild(li);

        //add a cross icon/delete value
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        //displaying the cross icon(span) in li Html element
        li.appendChild(span);
    }
    //remove the the text/input value after adding
    inputBox.value = "";
}