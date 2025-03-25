function generatePassword() {
    console.log("Button clicked");
    fetch("https://api.quantumnumbers.anu.edu.au/?length=10&type=uint8") 
}

function loadPage() {
    const generateButton = document.getElementById("generateButton")
    generateButton.addEventListener("click", generatePassword)
};

window.addEventListener("DOMContentLoaded", loadPage)