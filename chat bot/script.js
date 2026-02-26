document.addEventListener("DOMContentLoaded", () => {
  const chatMessages = document.getElementById("chat-messages");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");

  // Simple responses for the chatbot
  const botResponses = {
    hello: "Hello! How can I help you today?",
    hi: "Hi there! How can I assist you?",
    "how are you": "I'm doing well, thank you! How about you?",
    "what can you do":
      "I can answer simple questions and have basic conversations. Try asking me something!",
      "which year india won the t2o world cup": "India has won the T20 World Cup once, in 2007.",
     "i am bored": "Oh no! Would you like to hear a joke or play a small quiz?",
     "tell me a joke": "Why did the computer go to the doctor? Because it caught a virus! 😄",

     "I am sad": 
     I'm sorry to hear that. 💙 Do you want to talk about it?,

     "I am happy": "That's wonderful! 😊 What made you happy today?", 

    bye: "Goodbye! Have a great day!",
    default: "I'm not sure I understand. Could you try asking something else?",

  };

  // Function to add a message to the chat
  function addMessage(message, isUser = false) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.classList.add(isUser ? "user-message" : "bot-message");

    const messageText = document.createElement("p");
    messageText.textContent = message;
    messageDiv.appendChild(messageText);

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // scrolls to the bottom of the chat messages
  }

  // Function to get bot response
  function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    for (const [key, value] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return value;
      }
    }

    return botResponses.default;
  }

  // Function to handle sending messages
  function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
      addMessage(message, true);
      userInput.value = "";

      // Simulate bot thinking
      setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessage(botResponse);
      }, 500);
    }
  }

  // Event listeners
  sendButton.addEventListener("click", sendMessage);

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
});
