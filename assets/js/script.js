var saveButtonEl = document.querySelector("#save-button");

var saveEnteredText = function(event) {
    var enteredText = document.querySelector(".text");
    console.log(enteredText);
};

saveButtonEl.addEventListener("click", function(event) {
    event.preventDefault();

    saveEnteredText();
});

