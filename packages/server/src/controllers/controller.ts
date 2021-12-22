const ratesService = require('../services/apiService');

class RatesController {
    public async getConverted(req,res) {
        const converted = await ratesService.convert(req.params)
        res.json(converted);

    }
     async  getCurNames(req,res) {
        const names = await ratesService.getCurNames();
        res.json(names)
    }
}
 

module.exports = new RatesController()