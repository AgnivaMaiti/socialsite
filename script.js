// Array to store posted messages
const messages = [];

// Function to post a new message
function postMessage() {
    const inputField = document.getElementById('messageInput');
    const message = inputField.value;

    if (message.trim() === '') {
        alert('Please enter a message.');
        return;
    }

    messages.push(message);
    inputField.value = '';
    displayMessages();
}

// Function to display all messages
function displayMessages() {
    const messageDisplay = document.getElementById('messageDisplay');
    messageDisplay.innerHTML = '';

    for (const message of messages) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageDisplay.appendChild(messageElement);
    }
}

// Initial display of messages
displayMessages();
