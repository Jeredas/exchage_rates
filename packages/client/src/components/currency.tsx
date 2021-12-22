import React, { useEffect, useState } from 'react';
import { CurrencyInput } from './cur';
import config from '../utils/starCurrencies.json'
import { IRate } from '../utils/interfaces';

export const Currency = () => {
    const [rates, setRates] = useState<IRate[]>([]);
    const [visible, setVisible] = useState('invisible');
    const [displayedCurs, setDisplayedCurs] = useState(config.startCurrs);
    const [undisplayedCurs, setUnDisplayedCurs] = useState(config.restCurrs);

    useEffect(() => {
        getRates("USD", "1");
    }, []);

    const getRates = (abbreviation: string, value: string) => {
        fetch(`http://localhost:7000/api/rates/${abbreviation}&${value}`).then(
            res => res.json()
        ).then(res => {
            setRates(res);
        })
    }
    const handleInput = (rate: IRate) => {
        getRates(rate.Cur_Abbreviation, rate.CUR_Amount)
    }
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const searched = undisplayedCurs.find((curr)=>{
            return curr.Cur_Abbreviation === e.target.value
        })
        if(displayedCurs && searched){
            setDisplayedCurs([...displayedCurs, searched])
        }
        
        const filtered = undisplayedCurs.filter((curr) => {
            return curr.Cur_Abbreviation !== e.target.value
        });
        setUnDisplayedCurs(filtered);
        setVisible('invisible');
    }
    return (
        <div className='main_wrapper'>
            {displayedCurs.map((rate) => {
                return rates.map((curr) => {
                    if(curr.Cur_Abbreviation === rate.Cur_Abbreviation){
                    return <CurrencyInput rate={curr} onChange={(rate) => handleInput(rate)} />
                }});
            }
            )}
            <div onClick={() => {
                if (visible === 'invisible') {
                    setVisible('visible')
                } else {
                    setVisible('invisible')
                }
            }}> + добавить валюту </div>
            <select className={visible}
                onChange={handleSelect}>
                <option value=''>Выбирете валюту</option>
                {undisplayedCurs.map((curr) => {
                    return <option value={curr.Cur_Abbreviation}>{`${curr.Cur_Abbreviation} ${curr.Cur_Name}`}</option>
                })}
            </select>
        </div>
    )
}
