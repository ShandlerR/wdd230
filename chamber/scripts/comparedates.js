lastVisit = JSON.parse(localStorage.getItem("lastVisit"));
visitElement = document.querySelector("#visitMessage");

visitElement.textContent = "When was your last visit?";

const visitMessage =
{
    "firstVisit": "Welcome! Let us know if you have any questions.",
    
    "justReturned": "Back so soon? Awesome!",
    
    "longLeaveStart": "You last visited", //x
    "longLeaveEnd": "ago" // day(s) will be autofilled
}

if(!lastVisit) // This is the First Visit
{
    visitElement.textContent = visitMessage["firstVisit"];
}
else // This is a return Visit! 
{
    const secondsSinceVisit = Math.abs(Date.now() - lastVisit)/1000;
    const daysSinceLastVisit = Math.floor((((secondsSinceVisit/60)/60)/24)); // seconds -> Minute -> hours -> days
    
    if(daysSinceLastVisit < 1) // Just returned after a short leave
    {
        visitElement.textContent = visitMessage["justReturned"];
    }
    else // Returned after a long leave
    {
        var fullMessage = `${visitMessage["longLeaveStart"]} ${daysSinceLastVisit}`;
    
        if(daysSinceLastVisit == 1) // 1 day since last return
        {
            fullMessage = `${fullMessage} day`;
        }
        else // 2+ days since last return 
        {
            fullMessage = `${fullMessage} days`;
        }
        
        fullMessage = `${fullMessage} ${visitMessage["longLeaveEnd"]}`
        visitElement.textContent = fullMessage;
    }
}

// Overwrite the old data with the last visit date
localStorage.setItem("lastVisit", Date.now())
