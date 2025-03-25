function generatePassword() {
    console.log("Button clicked");

    fetch("/quantum-password")
        .then(response => response.text())
        .then(password => {
            document.getElementById("passwordOutput").value = password;
        })
        .catch(error => {
            console.error("Error generating password:", error);
            document.getElementById("passwordOutput").value = "Failed to generate password.";
        });
}

function loadPage() {
    const generateButton = document.getElementById("generateButton")
    generateButton.addEventListener("click", generatePassword)
};

window.addEventListener("DOMContentLoaded", loadPage)