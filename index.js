const Alexa = require('ask-sdk-core');

const LaunchIntent = require('./handlers/LaunchIntent');
const QuoteIntent = require('./handlers/QuoteIntent');
const ErrorIntent = require('./handlers/ErrorIntent');
const StopIntent = require('./handlers/StopIntent');
const SessionEndedRequest = require('./handlers/SessionEndedRequestHandler');



const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchIntent,
    QuoteIntent,
    StopIntent,
    SessionEndedRequest
  )
  .addErrorHandlers(ErrorIntent)
  .lambda();