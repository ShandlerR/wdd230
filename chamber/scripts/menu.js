const hamButton = document.querySelector("#menu");

const navigation = document.querySelector("ul");

const background = document.querySelector("#box");

hamButton.addEventListener
(
    "click", () => 
    {
        console.log("HELLO WORLD!");
        // The menu is opened by default, we need to add a way to close it.

        // Adds or removes the "closed" Tag to the nav class
        navigation.classList.toggle("closed"); 

        // Adds or removes the "Closed" Tag to the button
        hamButton.classList.toggle("closed");

        background.classList.toggle("closed");
    }
);