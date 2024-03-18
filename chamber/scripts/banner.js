const currentDay = new Date();
const banner = document.querySelector("#banner");
const bannerButton = document.querySelector("#bannerButton");

function hideBanner()
{
    banner.style.display = "none";
}

if (currentDay.getDay() > 3)
{
    banner.style.display = "none";
}

bannerButton.addEventListener("click", hideBanner);

console.log("THE DAY TODAY IS", currentDay.getDay());