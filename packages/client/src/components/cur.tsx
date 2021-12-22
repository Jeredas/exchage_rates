import React, { ChangeEvent, useState } from "react";
import { IRate } from "../utils/interfaces";

export const CurrencyInput = (props: { rate: IRate, onChange: (rate: IRate) => void }) => {
    const [currentValue, setCurrentValaue] = useState('1')
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
                <input type="number"
                    inputMode="decimal"
                    value={props.rate.CUR_Amount === undefined ? currentValue : props.rate.CUR_Amount}
                    onChange={handleChange}
                    pattern="[0-9]{20}" />
                <div className="currency_name">{props.rate.Cur_Name}</div>
            </div>

        </div>)
}