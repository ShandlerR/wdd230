const temperature = document.querySelector("#weather");
const weatherIcon = document.querySelector("#weather-icon");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.61&lon=-75.48&units=imperial&appid=66fe095ebb335c6002ce2f7e309de2d4"; 

async function apiFetch()
{
    const response = await fetch(url);
    const data = await response.json();

    displayData(data);
}

function displayData(data)
{
    // Get and set the weather picture
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].description);

    // Set the actual temperature text
    temperature.innerHTML = `${data.main.temp}&deg;F - ${data.weather[0].description}`;

}

apiFetch();