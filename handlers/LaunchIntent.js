const messages = require('../messages');


module.exports = {
  canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
  handle(handlerInput) {
      const speechText = messages.WELCOME_MESSAGE;
      const reprompt = 'Say greet me';
  
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .getResponse();
    },
  }