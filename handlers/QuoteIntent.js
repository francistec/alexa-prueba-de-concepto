const services = require('../services');
module.exports = {
  canHandle(handlerInput) {
    console.log(JSON.stringify(handlerInput));
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'QuoteIntent';
  },
  async handle(handlerInput) {
    let slots = handlerInput.requestEnvelope.request.intent.slots
    let carType = slots.CarType.value;
    let dropOffDate = slots.DropoffDate.value;
    let pickupDate = slots.PickupDate.value;
    let info = await services.Quote(carType, pickupDate, dropOffDate);
    info = JSON.parse(info);
    let reply = `El precio de un ${info.content.similar} es de ${info.total} pesos`;
   

    return handlerInput.responseBuilder
      .speak(reply)
      .reprompt("empezamos a cotizar")
      .listen("¿Deseas Reservar?")
      .getResponse();

    
  },
}