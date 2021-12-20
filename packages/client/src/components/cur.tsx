import React from "react";
import { IRate } from "./currency";


export const Cur = (props:{rate:IRate,onChange:(rate:IRate)=>void}) =>{
    return (
        <div className="currency_wrapper">
        <span>{props.rate.Cur_Abbreviation}
        </span>
        <input value={props.rate.CUR_Amount} 
        onChange={(e)=>props.onChange({
            CUR_Amount:e.target.value,
            Cur_Abbreviation:props.rate.Cur_Abbreviation
            })} />

    </div>)
}