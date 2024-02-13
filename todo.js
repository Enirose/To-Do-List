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
    //automatically remove the the text/input value after adding it to the list created
    inputBox.value = "";
    saveTask();
}

//add javascript for click function
//if whenever we click the listContainer where it all stored the task
listContainer.addEventListener('click', function(e) {
    //a function is created to check if what we clicked
    //it will check if we click li, it will display the checked icon and unline
    //otherwise if you clicked again, once the checked is display, it will be back to unchecked since we added toggle 
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    //if the click target is SPAN. It will delete the parentElement which is li that we created
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
}, false);

//Added localStorage to keep store the data
function saveTask() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();