const url = "../data/members.json"

async function getData()
{
    const response = await fetch(url);

    const data = await response.json();

    console.table(data.Companies);
}

getData();