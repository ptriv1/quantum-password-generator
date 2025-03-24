function generatePassword() {}

function loadPage() {
    const generateButton = document.getElementById("generateButton")
    generateButton.addEventListener("click", generatePassword)
};

window.addEventListener("DOMContentLoaded", loadPage)