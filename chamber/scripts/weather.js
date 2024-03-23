const temperature = document.querySelector("#temp");
const windSpeed = document.querySelector("#windSpeed");
const threeDayForecast = document.querySelector("#threeDays");
const desc = document.querySelector("#desc");

// the "pretty" text to make the display look good before and after.
const fillerTextBefore = "Feels like: ";
const fillerTextAfter = "° F";
    //The actual container wind chill & Filler Text gets displayed in. 
    // only used for setting, never getting. Expected to be invisible when empty. 
const windChill = document.querySelector("#windChill");


const url = "https://api.openweathermap.org/data/2.5/forecast?lat=40.987&lon=-75.195&units=imperial&appid=66fe095ebb335c6002ce2f7e309de2d4"; 

async function apiFetch()
{
    const response = await fetch(url);
    const data = await response.json();

    today = new Date();
    today.setHours(12);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setDate(today.getDate() + 3);

    let unixDateSeconds = Math.floor(today.valueOf() / 1000);

    displayData(data["list"][0], findData(unixDateSeconds, data["list"]))
}

function displayData(today, futureForecast)
{
    // Set the actual temperature text
    temperature.innerHTML = `${today.main.temp}`;

    desc.textContent = `${today.weather[0].description}`;
    windSpeed.textContent = `${today.wind.speed}`

    if(threeDayForecast != null)
    {
        threeDayForecast.innerHTML = `<h2>${futureForecast.main.temp}&deg;F </h2>`
    }
    findWindChill();
}

function findData(unixDate, objArray)
{
    let result = null;
    
    for(let i = 0; i < objArray.length; i++)
    {
        element = objArray[i];

        if(element["dt"] == unixDate)
        {
            result = element;
        }
    }

    return result;
}

function getWindChill(temp, speed)
{
    var windChill = 0;
    
    if(temp <= 50 && speed > 3.0)
    {
        windChill = 35.74 + (temp * 0.6215) - ((speed ** 0.16) * 35.75) + ((speed ** 0.16) * temp * 0.4275);        
    }

    return windChill;
};

// START OF PROGRAM
function findWindChill() 
{
    // Empties out our text by default. This should make it "invisible"
    windChill.textContent = "";
    const windChillValue = getWindChill(temperature.textContent, windSpeed.textContent);
 
    /* 
    If we actually have a valid value, let's fill it in! 
    This also handles actually setting the  to "display" mode. However because the  
    is invisible by default, and adding text makes it visible, we don't need to explicitly make it visible again. 
    */
    if(windChillValue != 0)
    {
        windChill.textContent = `${fillerTextBefore}${windChillValue.toFixed(2)}${fillerTextAfter}`
    }
}


apiFetch();