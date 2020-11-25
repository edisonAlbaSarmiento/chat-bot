class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("hola")) {
        this.actionProvider.greet()
      }else if(lowerCaseMessage.includes("quien eres")){
        this.actionProvider.responseQuestionOne()
      }
      else if(lowerCaseMessage.includes("que haces")){
        this.actionProvider.responseQuestionTwo()
      }
      else if(lowerCaseMessage.includes("como te llamas")){
        this.actionProvider.responseQuestionThree()
      }
      else if(lowerCaseMessage.includes("como funciona")){
        this.actionProvider.responseQuestionFour()
      }
      else if(lowerCaseMessage.includes("que ubicacion tiene tu empresa")){
        this.actionProvider.responseQuestionFive()
      }
      else{
        this.actionProvider.question();
      }
    }
  }
  
  export default MessageParser