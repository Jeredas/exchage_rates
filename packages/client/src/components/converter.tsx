import React, { useEffect, useState } from 'react';
import { CurrencyInput } from './currencyInput';
import { IRate } from '../utils/interfaces';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../store/hooks/useTypedSelector';
import { display, hide } from '../store/slices/currenciesSlice';

const SERVER_URL= 'https://currenciesrates.herokuapp.com/api/rates/'

export const Converter = () => {
    const [rates, setRates] = useState<IRate[]>([]);
    const [visible, setVisible] = useState('invisible');
    const dispatch = useDispatch();
    const { displayed, hidden } = useTypedSelector((state => state.currencies))
    useEffect(() => {
        getRates("USD", "1");
    }, []);

    const getRates = (abbreviation: string, value: string) => {
        fetch(`${SERVER_URL}${abbreviation}&${value}`).then(
            res => res.json()
        ).then(res => {
            setRates(res);
        });
    };
    const handleInput = (rate: IRate) => {
        getRates(rate.Cur_Abbreviation, rate.CUR_Amount);
    }
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if(!e.target.value){
            setVisible('invisible');
        }
        dispatch(display(e.target.value));
        setVisible('invisible');
       
    }
    const handleRemove = (abbreviation: string) => {
        console.log(abbreviation)
        dispatch(hide(abbreviation))

    }
        return (
            <div className='main_wrapper'>
                <h1 className='title'> Конвертер валют </h1>
                <span className='title_info'>Официальный курс, устанавливаемый Национальным банком Республики Беларусь на {new Date(Date.now()).toLocaleString().split(',')[0]}</span>
                {displayed.map((rate) => {
                    return rates.map((curr) => {
                        if (curr.Cur_Abbreviation === rate.Cur_Abbreviation) {
                            return <CurrencyInput rate={curr}
                                onChange={(rate) => handleInput(rate)}
                                onRemove={(abbreviation) => handleRemove(abbreviation)}
                                key={curr.Cur_Abbreviation}
                            />
                        }
                    });
                }
                )}
                <div className='currency_add'
                    onClick={() => {
                    if (visible === 'invisible') {
                        setVisible('visible')
                    } else {
                        setVisible('invisible')
                    }
                }}> + добавить валюту </div>
                <select className={visible}
                    onChange={handleSelect}>
                    <option className='select_option' value={undefined}>Выбирете валюту</option>
                    {hidden.map((curr) => {
                        return <option value={curr.Cur_Abbreviation}  key={curr.Cur_Name}>{`${curr.Cur_Abbreviation} ${curr.Cur_Name}`}</option>
                    })}
                </select>
            </div>
        )
    }

