export interface IOffRateAndScale {
    Cur_OfficialRate: number,
    Cur_Scale: number;
}

export interface IRate {
    Cur_ID: number,
    Date: string,
    Cur_Abbreviation: string,
    Cur_Scale: number,
    Cur_Name: string,
    Cur_OfficialRate: number
}
