// JavaScript code for welcome message functionality
welcomeMessage();

// Function to display a welcome message
function welcomeMessage() {
    // Prompt the user for their name
    let userResponse = prompt("Welcome to Yama Company! What is your name?");

    // Handle case where user cancels or enters an empty name
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    // Display the welcome message on the webpage
    document.getElementById("welcome-speech").innerText = `Hello, ${userResponse}! Welcome to Fitri Company.`;
}

// Function to handle message submission (currently empty)
function submitMessage() { }