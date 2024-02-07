const yearElement = document.querySelector("#currentYear")
const modElement = document.querySelector("#lastModified")

const options = {
    year: "numeric"
}



yearElement.innerHTML = new Date().toLocaleDateString("en-UK", options);
modElement.textContent = `${document.lastModified}`;