// Show Alert Button
document.getElementById("alertButton").addEventListener("click", () => {
    alert("Hello! This is your alert message.");
});

// Toggle Text Button
document.getElementById("toggleButton").addEventListener("click", () => {
    const text = document.getElementById("toggleText");
    text.style.display = text.style.display === "none" ? "block" : "none";
});