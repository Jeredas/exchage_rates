const ratesService = require('../services/apiService');

class RatesController {
    public async getConverted(req,res) {
        const converted = await ratesService.convert(req.params)
        res.json(converted);

    }
    //  async  setRates(req,res) {
    //     const restRates = await ratesService.getRates();
    //     //res.json(restRates)
    // }
}
 

module.exports = new RatesController()