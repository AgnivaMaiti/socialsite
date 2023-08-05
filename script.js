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
    saveMessagesToLocalStorage(); // Save messages to local storage
}

// Function to save messages to local storage
function saveMessagesToLocalStorage() {
    localStorage.setItem('messages', JSON.stringify(messages));
}

// Function to retrieve messages from local storage
function getMessagesFromLocalStorage() {
    const storedMessages = localStorage.getItem('messages');
    return storedMessages ? JSON.parse(storedMessages) : [];
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

// Load messages from local storage on page load
messages.push(...getMessagesFromLocalStorage());
displayMessages();
