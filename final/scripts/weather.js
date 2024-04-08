const url = "https://api.openweathermap.org/data/2.5/forecast?lat=33.158&lon=-117.351&units=imperial&appid=66fe095ebb335c6002ce2f7e309de2d4"; 
const monthElement = document.querySelector("#date");
const timeElement = document.querySelector("#time");
const weatherElement = document.querySelector("#weather");
const weatherIcon = document.querySelector("#weatherIcon");
const weatherCards = document.querySelector("#weatherCards");

async function apiFetch()
{
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    display(data);
}

function display(data)
{
    let today = data.list[0];
    displayTodayDate(today);
    const iconsrc = `https://openweathermap.org/img/w/${today.weather[0].icon}.png`;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", today.weather[0].description);

    weatherElement.innerHTML = `${today.main.temp}&deg;F - ${today.weather[0].description}<br>${today.main.humidity}% humidity`;

    displayWeeks(data, today);
}


function convertToNormal(date)
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

function displayTodayDate(today)
{
    let date = new Date(today.dt * 1000);

    monthElement.textContent = `${date.getMonth()+1}/${date.getDate()}`;

    let times = convertToNormal(date);

    timeElement.textContent = `${times[0]}:${times[1]}`;

    if(times[2])
    {
        timeElement.textContent += " PM";
    }
    else 
    {
        timeElement.textContent += "AM";
    }
}

function displayWeeks(data, today)
{
    let date = new Date(today.dt * 1000);
    let hours = date.getHours();

    if(hours == 0)
    {
        hours = 24;
    } 

    // Distance is set to the index of midnight tomorrow morning
    let distance = (24 - hours) / 3;

    // get us to 9AM
    distance += 3;

    for(let i = distance; i < (distance + 6) * 3; i = i + 4)
    {
        let dayData = data.list[i];

        date = new Date(dayData.dt * 1000);

        let card = document.createElement("div");

        let dateDisplay = document.createElement("p");
        let timeDisplay = document.createElement("p");
        let weatherDisplay = document.createElement("p");

        //Setting dateDisplay
        dateDisplay.textContent = `${date.getMonth()+1}/${date.getDate()}`;

        //Setting timeDisplay
        let times = convertToNormal(date);
        timeDisplay.textContent = `${times[0]}:${times[1]}`;
        if(times[2])
        {
            timeDisplay.textContent += "PM";
        }
        else 
        {
            timeDisplay.textContent += "AM";
        }


        //setting weatherDisplay
        weatherDisplay.innerHTML = `${dayData.main.temp}&deg;F - ${dayData.weather[0].description}`;

        //Since only mornings are shown on mobile, adds a class to show which ones are nights
        if(times[2] == true)
        {
            // add bigDisplay classList to Div
            card.classList.add("night");
        }

        // Adds all elements to display
        weatherCards.appendChild(card);

        card.appendChild(dateDisplay);
        card.appendChild(timeDisplay);
        card.appendChild(weatherDisplay);

        
    }
}

apiFetch();