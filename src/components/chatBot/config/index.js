import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "Carnival party",
  initialMessages: [createChatBotMessage("Hola, estoy aquí para ayudarte. Que quieres aprender?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "rgb(225,44,55)",
    },
    chatButton: {
      backgroundColor: "rgb(225,44,55)",
    },
  },
}

export default config