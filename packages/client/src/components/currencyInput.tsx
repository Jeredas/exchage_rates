import React, { ChangeEvent, useState } from "react";
import { IRate } from "../utils/interfaces";
import currenciesLists from '../utils/starCurrencies.json';

export const CurrencyInput = (props: { rate: IRate, onChange: (rate: IRate) => void ,onRemove:(abbreviation:string)=>void}) => {
    const [currentValue, setCurrentValaue] = useState('1');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) === NaN || e.target.value === "") {
            props.onChange({
                CUR_Amount: "0",
                Cur_Abbreviation: props.rate.Cur_Abbreviation,
                Cur_Name: props.rate.Cur_Name
            });
            setCurrentValaue(e.target.value);
        } else {
            setCurrentValaue(e.target.value)
            props.onChange({
                CUR_Amount: e.target.value,
                Cur_Abbreviation: props.rate.Cur_Abbreviation,
                Cur_Name: props.rate.Cur_Name
            });
        }
    }
    return (
        <div className="currency_wrapper">
            <div className="curr_abbr">{props.rate.Cur_Abbreviation}
            </div>
            <div className="curr_input">
                <input className='input_field'
                    type="number"
                    inputMode="decimal"
                    value={props.rate.CUR_Amount === undefined ? currentValue : props.rate.CUR_Amount}
                    onChange={handleChange}
                    pattern="[0-9]{20}" />
                <div className="currency_name">{props.rate.Cur_Name}</div>
            </div>
           {!currenciesLists.restrictedCurrencies.includes(props.rate.Cur_Abbreviation) 
           && <div className="remove_currency" 
                onClick={()=>props.onRemove(props.rate.Cur_Abbreviation)}>
            </div>}

        </div>)
}