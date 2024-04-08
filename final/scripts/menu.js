const menuButton = document.querySelector("nav button");
const navigation = document.querySelector("nav ul");


menuButton.addEventListener("click", toggleMenu);


function toggleMenu()
{
    navigation.classList.toggle("hidden");
    menuButton.classList.toggle("open");
}