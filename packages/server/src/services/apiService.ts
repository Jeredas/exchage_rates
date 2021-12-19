
const axios = require('axios')
const RATES_URL = process.env.API_RATESLIST_URL || "https://www.nbrb.by/api/exrates/rates?periodicity=0";

class ApiService {
    rates: any[] = [];
    public async getRates() {
        this.rates = await axios(RATES_URL).then(res => res.data);;
        return { BYR_Amount: 1, CUR_Rates: this.rates };
    }
    public async convert(params) {
        if (this.rates = []) {
            await this.getRates()
        };
        const CUR_Abbreviation = (params.CUR_Abbreviation).toUpperCase()
        const CUR_Amount = Number(params.CUR_Amount);
        const Current_CUR = this.rates.find((rate) => {
            return rate.Cur_Abbreviation === CUR_Abbreviation
        })
        const BYR_Amount = Current_CUR.Cur_OfficialRate * CUR_Amount / Current_CUR.Cur_Scale;
        const CUR_Rates = this.rates.map((rate) => {
            return {
                CUR_Amount: (BYR_Amount / rate.Cur_OfficialRate).toFixed(4),
                Cur_Abbreviation: rate.Cur_Abbreviation
            }
        })
        return { BYR_Amount: BYR_Amount.toFixed(4), CUR_Rates };
    }
}
const apiService = new ApiService()
module.exports = apiService