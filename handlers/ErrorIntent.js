module.exports = {
    canHandle(handlerInput) {
        return true;
    },
    handle(handlerInput, error) {
        console.log(error);
    //console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
        .speak('No entendí lo que pediste')
        .reprompt('No entendí lo que pediste')
        .getResponse();
    },
}