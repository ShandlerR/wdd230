function main()
{
    let ordersMade = localStorage.getItem("ordersMade");
    const ordersElement = document.querySelector("#orders");

    if(ordersMade === null)
    {
        ordersMade = 0;
        localStorage.setItem("ordersMade", "0")
    }

    ordersElement.textContent = ordersMade;

}

main();