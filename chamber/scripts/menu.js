const hamButton = document.querySelector("#menu");

const navMenu = document.querySelector("nav");

const openNavCommand = "navMenuOpen"

hamButton.addEventListener
(
    "click", () => 
    {


        navMenu.classList.toggle(openNavCommand);

        hamButton.classList.toggle(openNavCommand);
    }
);