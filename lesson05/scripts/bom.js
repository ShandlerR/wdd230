const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("#list");

button.addEventListener
(
    "click", function() 
    {
        if(input.value != "")
        {
            const li = document.createElement("li");
            li.textContent = input.value;
            
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            deleteButton.addEventListener
            (
                "click", function()
                {
                    input.value = "";
                    input.focus();
                    deleteButton.parentElement.remove();
                }
            )

            li.append(deleteButton);
            ul.append(li);
        }
        else 
        {
            alert("This textbox is empty!");
            input.focus();
        }
    }
);