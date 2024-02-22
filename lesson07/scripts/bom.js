const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("#list");


button.addEventListener
(
    "click", function() 
    {
        if(input.value != "")
        {
            displayList(input.value);
            chapterArray.push(input.value);
            setChapterList();
            input.value = "";
            input.focus();
        }
    }
)

function displayList(item) 
{
    const li = document.createElement("li");
    li.textContent = item;
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener
    (
        "click", function()
        {
            item = "";
            input.focus();
            deleteButton.parentElement.remove();
        }
    )

    li.append(deleteButton);
    ul.append(li);
}

function setChapterList()
{
    localStorage.setItem("favoriteBOM", JSON.stringify(chapterArray));
}

function getChapterList()
{
    return JSON.parse(localStorage.getItem("favoriteBOM"))
}

var chapterArray = getChapterList() || [];

chapterArray.forEach(chapter => {
    displayList(chapter);
});

function deleteChapter(chapter)
{
    chapter = chapter.slice(0, chapter.length - 1); 
    chapterArray = chapterArray.filter((item) => item !== chapter);
    setChapterList();
}