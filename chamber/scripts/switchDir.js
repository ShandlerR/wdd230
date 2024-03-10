// Switching View Logic
const listButton = document.querySelector("#listButton");
const gridButton = document.querySelector("#gridButton");

const view = document.querySelector("#cards");
view.classList.toggle("list");

listButton.addEventListener("click", function() {onClick(true)});
gridButton.addEventListener("click", function() {onClick(false)});

function onClick(isListView)
{
    if(isListView)
    {
        view.classList.add("list");
        view.classList.remove("grid");
    }
    else 
    {
        view.classList.add("grid");
        view.classList.remove("list");
    }
}