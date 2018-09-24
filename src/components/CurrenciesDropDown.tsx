import * as React from 'react';
import {  Rate } from '../model';

const style: React.CSSProperties = {
    lineHeight: '20px',
    margin: '10px',
}

interface CurrenciesDropDownProps {
    currencies: Rate,
    selected: string,
    handleSelect: (selected: string) => void
}

const getListOfCurrencies = (currencies: Rate, selected: string): JSX.Element[] => {
    return Object.keys(currencies).map( currency => {
        return (
            <option
                key={currency}
                value={currency}>{currency} / USD</option>)
    })
}

export const CurrenciesDropDown = (props: CurrenciesDropDownProps): JSX.Element => {
    return (
        <div style={style}>
            <label>Select the currency you want to trade: </label>
            <select onChange={ (event: any) => props.handleSelect(event.target.value)}
            defaultValue={props.selected}>
                {getListOfCurrencies(props.currencies, props.selected)}
            </select>
        </div>
    )
};