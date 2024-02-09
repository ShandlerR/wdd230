const button = document.querySelector("#lightModeToggle");

const body = document.querySelector("body");

const lightModeCommand = "lightMode";

button.addEventListener
(
    "click", () => 
    {
        button.classList.toggle(lightModeCommand);
        body.classList.toggle(lightModeCommand);
    }
);