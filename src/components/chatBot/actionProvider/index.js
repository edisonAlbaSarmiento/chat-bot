class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("Hola, amigo.")
      this.updateChatbotState(greetingMessage)
    }
    responseQuestionOne() {
      const greetingMessage = this.createChatBotMessage("Los usuarios quieren conocer la historia del chatbot, quién es y de dónde viene. Es importante establecer desde el principio que el usuario está hablando con un chatbot con capacidades limitadas, de esa manera se establecen las expectativas correctas.")
      this.updateChatbotState(greetingMessage)
    }
    responseQuestionTwo() {
      const greetingMessage = this.createChatBotMessage("El bot debe informar a los usuarios qué es lo que hace, y por qué estás allí para ellos.")
      this.updateChatbotState(greetingMessage)
    }
    responseQuestionThree() {
      const greetingMessage = this.createChatBotMessage("¿Cuál es el nombre de tu chatbot? ¿Quién o qué es tu chatbot? ¿Tiene incluso un nombre? El chabot debe estar preparado para contestar todo esto, no solo porque los usuarios van a preguntar, sino porque esto es algo que debes resolver internamente, como empresa.")
      this.updateChatbotState(greetingMessage)
    }
    responseQuestionFour() {
      const greetingMessage = this.createChatBotMessage(" Los clientes que estén dispuestos a pagar en línea mediante transacciones con tarjeta de crédito deben sentirse seguros al compartir sus datos.")
      this.updateChatbotState(greetingMessage)
    }
    responseQuestionFive() {
      const greetingMessage = this.createChatBotMessage("Estamos ubicados en la calle 70 #7-30")
      this.updateChatbotState(greetingMessage)
    }
    question() {
      const greetingMessage = this.createChatBotMessage("Lo siento no tengo esa informacion")
      this.updateChatbotState(greetingMessage)
    }
    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider