
// Companies Logic

const memUrl = "data/members.json"
const card = document.querySelector("#spotlight");
const title = card.querySelector("h3");

const pTags = card.querySelectorAll("p");

const phoneSection = pTags[2];
const membershipSection = pTags[0];
const urlSection = pTags[1];
const addressSection = pTags[3];

async function getData()
{
    const response = await fetch(memUrl);
    const data = await response.json();

    //console.table(data.Companies);

    const members = getHighStatusMembers(data.Companies);

    displayRandomMember(members);
}

function getHighStatusMembers(data)
{
    const highStatusObjects = [];

    for(const company of data)
    {
        if(company.Membership.toLowerCase() == "gold" || company.Membership.toLowerCase() == "silver")
        {
            highStatusObjects.push(company);
        }
    }

    return highStatusObjects;
}

function displayRandomMember(members)
{
    var randomCompany = members[Math.floor(Math.random()*members.length)];

    title.textContent = randomCompany.Name;
    phoneSection.textContent = randomCompany.Phone;
    membershipSection.textContent = "A " + randomCompany.Membership + " Membership Owner!";
    urlSection.textContent = randomCompany.URL;
    addressSection.textContent = randomCompany.Address;
}

getData();
