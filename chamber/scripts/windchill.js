// Changable Values
    // Where we get our temperature from. Never gets altered.
const temperatureContainer = document.querySelector("#temp");
    // Where we get our Wind Speed from. Never gets altered.
const windSpeedContainer = document.querySelector("#windSpeed");

    // the "pretty" text to make the display look good before and after.
const fillerTextBefore = "Feels like: ";
const fillerTextAfter = "° F";
    //The actual container wind chill & Filler Text gets displayed in. 
    // only used for setting, never getting. Expected to be invisible when empty. 
const windChillContainer = document.querySelector("#windChill");


// Declared Functions for Later Use

/*
    Calulates the Wind Chill
    PARAMS:
        Temp: A double that represents The current temperature in Farenheit.
        Speed: A double that represents the current wind speed, in MPH
    OUTPUT:
        windChill: A non-rounded double reprenting the current windChill!
            If windChill cannot be calculated, it defaults to zero. Otherwise,
            It's a valid value that hopefully isn't 0.
*/
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
function main() 
{
    // Empties out our textContainer by default. This should make it "invisible"
    windChillContainer.textContent = "";
    const windChill = getWindChill(temperatureContainer.textContent, windSpeedContainer.textContent);
 
    /* 
    If we actually have a valid value, let's fill it in! 
    This also handles actually setting the container to "display" mode. However because the container 
    is invisible by default, and adding text makes it visible, we don't need to explicitly make it visible again. 
    */
    if(windChill != 0)
    {
        windChillContainer.textContent = `${fillerTextBefore}${windChill.toFixed(2)}${fillerTextAfter}`
    }

    console.log(windChill);
    console.log(temperatureContainer.textContent);
    console.log(windSpeedContainer.textContent);
}

main();