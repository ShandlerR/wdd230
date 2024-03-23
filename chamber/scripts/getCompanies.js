
// Companies Logic

const dataUrl = "data/members.json"
const cardsParent = document.querySelector("#cards");

async function getData()
{
    const response = await fetch(dataUrl);
    const data = await response.json();

    //console.table(data.Companies);

    setDisplay(data.Companies);
}


function setDisplay(array)
{
    for(const company of array)
    {
        // Create the Parent Div Class
        const card = document.createElement("div");
        card.setAttribute("class", "aCard");
        cardsParent.appendChild(card);

        // Create and set the Title
        const titleElement = document.createElement("h2");
        titleElement.textContent = company.Name;

        // Create and set the Picture
        const pictureElement = document.createElement("img");
        pictureElement.setAttribute("src", `images/Companies/${company.IMGName}`);
        pictureElement.setAttribute("alt", `A picture of ${company.Name}'s Logo.}`)
        pictureElement.setAttribute("loading", "lazy");

        pictureElement.setAttribute("width", "340");
        pictureElement.setAttribute("height", "auto");

        // create and set the URL
        const URLElement = document.createElement("p");
        URLElement.textContent = company.URL;

        // Create and set the address
        const addressElement = document.createElement("p");
        addressElement.textContent = company.Address;

        // create and set the phone number
        const phoneElement = document.createElement("p");
        phoneElement.textContent = company.Phone;

        // create and set the membership Level
        const membershipElement = document.createElement("p");
        membershipElement.textContent = company.Membership;
        
        // Add all Elements to Parent Div Container
        card.appendChild(titleElement);
        card.appendChild(pictureElement);
        card.appendChild(URLElement);
        card.appendChild(addressElement);
        card.appendChild(phoneElement);
        card.appendChild(membershipElement);
    }
}

getData();