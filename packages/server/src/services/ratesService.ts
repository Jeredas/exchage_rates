const axios = require('axios')
const API_URL = process.env.API_URL

class RatesService {
    async getRates(){
    const res = await axios.get(`https://www.nbrb.by/api/exrates/rates?periodicity=0`)
    return res.data
}

}
const rates = new RatesService()
module.exports = rates