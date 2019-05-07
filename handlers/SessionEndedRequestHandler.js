const messages = require('../messages');


module.exports = {
  canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
  handle(handlerInput) {
      const speechText = messages.WELCOME_MESSAGE;
  
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .getResponse();
    },
  }