const ratesService = require('../services/ratesService')
class valuesController {
    constructor(){

    }
    async getValues(req,res){
        const values = await ratesService.getRates()
        res.json(values)
    }
}
const values = new valuesController()
module.exports = values;