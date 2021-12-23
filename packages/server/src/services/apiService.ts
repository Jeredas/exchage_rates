import { IRate } from "../utils/interfaces";
import { zeroCutter } from "../utils/zeroCutter";

const axios = require('axios')
console.log(process.env.API_RATESLIST_URL)
const RATES_URL = process.env.API_RATESLIST_URL;

class ApiService {
    rates: IRate[] = [];
    public async getRates() {
        this.rates = await axios(RATES_URL).then(res => res.data);
        this.rates = [...this.rates,{
            Cur_ID:1,
            Date:`${Date.now()}`,
            Cur_Abbreviation:"BYR",
            Cur_Scale:1,
            Cur_Name:"Белорусских рублей",
            Cur_OfficialRate:1
        }] ;
            return this.rates
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
            const check = rate.Cur_Abbreviation === CUR_Abbreviation
            return {
                CUR_Amount: !check? zeroCutter((BYR_Amount / rate.Cur_OfficialRate * rate.Cur_Scale).toFixed(4)) : undefined,
                Cur_Abbreviation: rate.Cur_Abbreviation,
                Cur_Name: rate.Cur_Name
            }
        })
        return CUR_Rates;
    }
    public getCurNames = async () => {
        if (this.rates = []) {
            await this.getRates()
        };
        return this.rates.map((rate)=>{
            return {
                Cur_Name:rate.Cur_Name,
                Cur_Abbreviation:rate.Cur_Abbreviation
                
            }
        })
    }
}
const apiService = new ApiService()
module.exports = apiService