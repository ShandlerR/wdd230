async function getData(url)
{
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

function createOption(name, element)
{
    const option = document.createElement("option");
    option.setAttribute("value", name);
    option.textContent = name;

    element.appendChild(option);
}

async function main()
{
    const dataUrl = "data/all-fruits.json";
    const firstSelect = document.querySelector("#firstFruit");
    const secondSelect = document.querySelector("#secondFruit");
    const thirdSelect = document.querySelector("#thirdFruit");

    const data = await getData(dataUrl);

    for(const fruit of data)
    {
        createOption(fruit.name, firstSelect);
        createOption(fruit.name, secondSelect);
        createOption(fruit.name, thirdSelect);
    }
}

main();