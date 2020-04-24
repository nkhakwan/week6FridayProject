export class CurrencyExchange {
  async getCurrency(currency) {
    try {
      
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }

  conversion(dollarAmount, currency, conversion_rates){
    let basket = [0,conversion_rates.PKR, conversion_rates.AED, conversion_rates.SAR, conversion_rates.CAD, conversion_rates.EUR];
      return basket[currency]*dollarAmount;
  }

}