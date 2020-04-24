export class CurrencyExchange {
  async getCurrency(currency) {
    try {
      console.log("logger has entered backend function call");
      let response = await fetch(`https://cors-anywhere.herokuapp.com/bikeindex.org/api/v3/search?stolenness=proximity&location=IP&distance=10`);
      //let response = await fetch(`https://bikeindex.org/api/v3/search?stolenness=proximity&location=IP&distance=10`);
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

}