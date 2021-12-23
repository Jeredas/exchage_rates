const ratesService = require('../services/apiService');

class RatesController {
    public async getConverted(req,res) {
        try { const converted = await ratesService.convert(req.params)
            res.json(converted);
        } catch(e) {
            console.log(e);
        }
    }
     async  getCurNames(req,res) {
         try {
            const names = await ratesService.getCurNames();
            res.json(names)
         } catch(e) {
            console.log(e);
         }
        
    }
}
 

module.exports = new RatesController()