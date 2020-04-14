"use strict";

window.blazoredTypeahead = {
    assemblyname: "Blazored.Typeahead",
    setFocus: function (element) {
        if (element) element.focus();
    },
    // No need to remove the event listeners later, the browser will clean this up automagically.
    addKeyDownEventListener: function (element) {
        element.addEventListener('keydown', function (event) {
            var key = event.key;

            if (key === "Enter") {
                event.preventDefault();
            }
        });
    },
    addOnFocusListener: function (element) {
        element.addEventListener("focus", function () {
            let container = element.closest(".blazored-typeahead");

            container.classList.add("focus");
        });
    },
    addOnBlurListener: function (element) {
        element.addEventListener("blur", function () {
            let container = element.closest(".blazored-typeahead");

            container.classList.remove("focus");
        });
    }
};