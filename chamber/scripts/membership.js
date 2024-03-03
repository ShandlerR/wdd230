featuresList = 
["Access to Basic Content and Resources", "Monthly Newsletter", "Community Forum Participation",                                            // NP Tier
"Exclusive Webinars and Workshops", "Early Access to New Content and Resources",                                                            // Bronze Tier
"Priority Customer Support", "Access to Premium Content and In-Depth Tutorials",                                                            // Silver Tier
"VIP Access to Events and Conferences", "Personalized Content Recommendations", "Monthly Exclusive Group Sessions With Industry Experts"]   // Gold Tier 

const display = document.querySelector("#costDisplaySection"); 
const allItems = document.querySelectorAll('input[name="membership"]');

allItems[0].addEventListener("change", function () { setDisplay( "Non Profit Tier", 0, featuresList.toSpliced(3) )});
allItems[1].addEventListener("change", function () { setDisplay( "Bronze Tier", 10, featuresList.toSpliced(5) )});
allItems[2].addEventListener("change", function () { setDisplay( "Silver Tier", 25, featuresList.toSpliced(7) )});
allItems[3].addEventListener("change", function () { setDisplay( "Gold Tier", 50, featuresList )});

function setDisplay(name, price, featureListSegment)
{
    console.log("triggered successful!");

    const headerLabel = display.querySelector("h3");
    const featuresLabel = display.querySelector("ul");
    const priceLabel = display.querySelector("p");

    // clears everything out
    headerLabel.textContent = "";
    priceLabel.textContent = "";
    featuresLabel.innerHTML = "";
    
    // set header text
    headerLabel.textContent = name;

    // set price info
    priceLabel.textContent = `$${price.toFixed(2)} per month`

    // fill features Label
    setFeatures(featuresLabel, featureListSegment);
}

function setFeatures(displayLabel, featureListSegment)
{

    for(const feature of featureListSegment)
    {
        const li = document.createElement("li");
        li.textContent = feature;
        displayLabel.appendChild(li);
    }
}