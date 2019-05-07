const messages = require('../messages');

/** cotiza un auto compacto del 22 de mayo al 28 de mayo*/
module.exports = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent';
    },
    handle(handlerInput) {
      const speechText = 'Gracias por usar renta de autos';
  
      return handlerInput.responseBuilder
        .speak(speechText)
          .getResponse();
    },
  }