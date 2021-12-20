import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Cur } from './cur';
export interface IRate {
    CUR_Amount: string,
    Cur_Abbreviation: string,
}


export const Currency = () => {
    const [value, setValue] = useState<IRate[]>([])
    
    useEffect(() => {
        getRates("USD","1")
    },[])
    const getRates = (abr:string,value:string) => {
        fetch(`http://localhost:7000/api/rates/${abr}&${value}`).then(
            res => res.json()
        ).then(res => {
            setValue(res)
        })
    }
    const handleInput =(e:IRate) =>{
        getRates(e.Cur_Abbreviation,e.CUR_Amount)
    }
    return (
        <>
            {value.map((rate) => {
                return <Cur rate={rate} onChange={(e)=>handleInput(e)}/>
            })}
        </>
    )
}
