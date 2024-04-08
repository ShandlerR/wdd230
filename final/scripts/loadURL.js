function convertToAMPM(date)
{
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let pm = false;

    minutes = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

    if(hours > 12) 
    {
        pm = true;
        hours -= 12;
    }

    if(hours == 0)
    {
        hours = 12;
    }

    return [hours, minutes, pm];

}

function fillData(params, nowDate, pickupElement, personalElement, drinkElement, nutritionElement)
{
    // Fill in a pseudo Pickup Time under "Pickup Time"
    let times = convertToAMPM(nowDate);

    pickupElement.textContent = `${times[0]+1}:${times[1]}`;

    if(times[2])
    {
        pickupElement.textContent += "PM";
    }
    else 
    {
        pickupElement.textContent += "AM";
    }

    // Put Name, Email, Date, & Phone number under "Personal Information"
    const fName = params.get("fname");
    const email = params.get("email");
    const number = params.get("tel");

    personalElement.innerHTML = 
    `Date: ${nowDate.getMonth()}/${nowDate.getDate()}<br>
    First Name: ${fName}<br>
    Email: ${email}`;

    if(number)
    {
        personalElement.innerHTML += `<br>Phone Number: ${number}`;
    }

    // Fill in fruit names under "Drink Contents"
    const fruitNames = [];

    fruitNames[0] = params.get("firstFruit");

    if(params.get("secondFruit") != "none")
    {
        fruitNames.push(params.get("secondFruit"));
    }

    if(params.get("thirdFruit") != "none")
    {
        fruitNames.push(params.get("thirdFruit"));
    }

    for(let fruitName of fruitNames)
    {
        drinkElement.innerHTML += `${fruitName}<br>`;
    }

    // Fill in calories, protein, carbs, fat, & sugar under "Nutritional Information"
    referenceJSON(fruitNames, nutritionElement);
}

async function referenceJSON(fruitNames, element)
{
    response = await fetch("data/all-fruits.json");
    data = await response.json();

    let calories = 0
    let protein = 0;
    let carbs = 0;
    let fat = 0;
    let sugar = 0;

    for(const fruitName of fruitNames)
    {
        const nutrients = getFruitNutrition(data, fruitName);

        protein += nutrients.protein;
        calories += nutrients.calories;
        carbs += nutrients.carbs;
        fat += nutrients.fat;
        sugar += nutrients.sugar;
    }

    element.innerHTML = 
    `Calories: ${calories}<br>
    Protein: ${protein}g<br>
    Carbohydrates: ${carbs}g<br>
    Fat: ${fat}g<br>
    Sugar: ${sugar}g`
}

function getFruitNutrition(data, name)
{
    for(let fruitObj of data)
    {
        if(fruitObj.name == name)
        {
            let nutrData = fruitObj.nutritions;

            const nutrients = {};

            nutrients.calories = nutrData.calories;
            nutrients.protein = nutrData.protein;
            nutrients.carbs = nutrData.carbohydrates;
            nutrients.fat = nutrData.fat;
            nutrients.sugar = nutrData.sugar;

            return nutrients;
            
        }
    }
}

function main()
{
    let url = new URL(window.location);
    const timeElement = document.querySelector("#pickupTime").querySelector("p");
    const personalElement = document.querySelector("#personalInfo").querySelector("p");
    const drinkElement = document.querySelector("#drinkInfo").querySelector("p");
    const nutritionElement = document.querySelector("#nutrInfo").querySelector("p");

    let params = url.searchParams;

    date = new Date();

    fillData(params, date, timeElement, personalElement, drinkElement, nutritionElement);
}

main();