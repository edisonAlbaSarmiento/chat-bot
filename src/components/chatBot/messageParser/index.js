class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("hola")) {
        this.actionProvider.greet()
      }else{
        this.actionProvider.question();
      }
    }
  }
  
  export default MessageParser