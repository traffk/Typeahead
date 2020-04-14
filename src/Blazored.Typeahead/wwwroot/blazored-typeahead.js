"use strict";

window.blazoredTypeahead = {
    assemblyname: "Blazored.Typeahead",
    setFocus: function (element) {
        if (element) {
            //while (getComputedStyle(element).display === "none") {}
            element.focus();
        }
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
    },
    addOnFocusInListener: function (element, dotnetHelper) {
        element.addEventListener("focusin", function () {
            dotnetHelper.invokeMethodAsync("MarkFocused");
            element.classList.add("focused");
        });
    },
    addOnFocusOutListener: function (element, dotnetHelper) {
        element.addEventListener("focusout", function () {
            dotnetHelper.invokeMethodAsync("MarkNotFocused");
            element.classList.remove("focused");
        });
    },
    addOnClickListener: function (element, dotnetHelper) {
        document.addEventListener("mousedown", function (element) {
            //target = event.target.closest(".blazored-typeahead");     // the element clicked on
            //element.closest(".blazored-typeahead");
            //myTarget = document.getElementById("idBox");   // the element to keep focus
            if (event.target.closest(".blazored-typeahead")) return;

            dotnetHelper.invokeMethodAsync("MarkNotFocused");
            element.classList.remove("focused");
        });
    }
};