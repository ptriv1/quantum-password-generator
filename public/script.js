function generatePassword() {
    console.log("Button clicked");

    fetch("/quantum-password")
        .then(response => response.text())
        .then(password => {
            document.getElementById("output").innerText = password;
        })
        .catch(error => {
            console.error("Error generating password:", error);
            document.getElementById("output").innerText = "Failed to generate password.";
        });
}

function loadPage() {
    const generateButton = document.getElementById("generateButton")
    generateButton.addEventListener("click", generatePassword)
};

window.addEventListener("DOMContentLoaded", loadPage)