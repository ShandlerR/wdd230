function main()
{
    const ordersElement = document.querySelector("#orders");

    let ordersMade = ordersElement.textContent;

    ordersElement.textContent = ++ordersMade;

    localStorage.setItem("ordersMade", ordersMade);
}

main();