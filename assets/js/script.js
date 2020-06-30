var saveButtonEl = document.querySelector("#save-button");
var currentDateEl = document.querySelector("#currentDay");

var displayDate = function() {
    var date = moment().format("MMMM Do YYYY");
    
    var dateEl = document.createElement("div");
    dateEl.textContent = date; 

    currentDateEl.appendChild(dateEl);
};

var saveEnteredText = function(event) {
    var enteredText = document.querySelector(".text");
    console.log(enteredText);
};

saveButtonEl.addEventListener("click", function(event) {
    event.preventDefault();

    saveEnteredText();
});

displayDate();

