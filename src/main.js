import { CurrencyExchange } from './api.js';

$(document).ready(function() {
  $('#exchangeRate').click(function() {
    let currencyType  =  parseInt($("#currency").val());
    const dollarAmount = parseInt($('#amount').val());
    $('#amount').val("");
    (async () => {
      let currencyExchange = new CurrencyExchange();
      const response = await currencyExchange.getCurrency(dollarAmount);
      const exchangeGot = currencyExchange.conversion(dollarAmount,currencyType,response.conversion_rates);

      getElements(exchangeGot);
    })();

    
    function getElements(exchangeGot) {
      if (exchangeGot) {
        $('.convertedAmount').text(`${exchangeGot} is the amount in your converted currency of choice`);
        $('.wellsee').text(`set aside few bucks for your iceCream from ${exchangeGot}`);
      } else {
        $('.convertedAmount').text(`There was an error handling your request.`);
        $('.wellsee').text(`Please check your inputs and try again!`);
      }
    }

  });
});