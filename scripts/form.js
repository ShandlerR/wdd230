const pw1 = document.querySelector("#password");
const pw2 = document.querySelector("#rPassword");
const message = document.querySelector("#formMessage");
const rangeValue = document.querySelector("#rangeValue");
const ratingSlider = document.querySelector("#rating");

pw2.addEventListener("focusout", checkSame);
ratingSlider.addEventListener("change", displayRating);
ratingSlider.addEventListener("input", displayRating);


function displayRating()
{
    rangeValue.innerHTML = ratingSlider.value;   
}

function checkSame() 
{
    if (pw1.value !== pw2.value)
    {
        message.textContent = "Passwords do not match";
		message.style.visibility = "show";
		pw2.style.backgroundColor = "#fff0f3";
		
        pw2.value = "";
		pw2.focus();
	}
    else 
    {
        message.textContent = "";
        pw2.style.backgroundColor = "white";
        console.log("Same");
    }
}