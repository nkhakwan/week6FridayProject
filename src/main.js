import { CurrencyExchange } from './api.js';

$(document).ready(function() {
  $('#exchangeRate').click(function() {
    console.log(`logger entered click function`);
    let currencyType  =  parseInt($("#currency").val());
    const dollarAmount = parseInt($('#amount').val());
    console.log(`does logger has currency ${currencyType} and amount ${dollarAmount}?`);
    $('#amount').val("");
    (async () => {
      let currencyExchange = new CurrencyExchange();
      const response = await currencyExchange.getCurrency(dollarAmount);
      const exchangeGot = currencyExchange.conversion(dollarAmount,currencyType,response.conversion_rates);
      console.log(response.conversion_rates);
      console.log(`logger's final data is here ${exchangeGot}`);

      getElements(exchangeGot);
    })();

    
    function getElements(response) {
      if (response) {
        $('.convertedAmount').text("we'll put converted amount here");
        $('.wellsee').text(`we'll see what do we need to put in here`);
      } else {
        $('.convertedAmount').text(`There was an error handling your request.`);
        $('.seethisonetoo').text(`Please check your inputs and try again!`);
      }
    }

  });
});