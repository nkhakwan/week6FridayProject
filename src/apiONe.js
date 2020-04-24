export class CurrencyExchange {
  async getCurrency(currency) {
    try {
      console.log("logger has entered backend function call");
      
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
      console.log("logger after the fetch");
      let jsonifiedResponse;
      console.log(`logger ok and status ${response.ok} and ${response.status}`);
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
        console.log(`logger has response ${jsonifiedResponse} and ${currency}`);
      } else {
        jsonifiedResponse = false;
        console.log (`logger in a wrong area`);
      }
      return jsonifiedResponse;
    } catch(error) {
      console.log (`logger in the catch area`);
      return false;
    }
  }

  conversion(dollarAmount, currency, conversion_rates){
    let basket = [0,conversion_rates.PKR, conversion_rates.AED, conversion_rates.SAR, conversion_rates.CAD, conversion_rates.EUR];
      return basket[currency]*dollarAmount;
  }

}