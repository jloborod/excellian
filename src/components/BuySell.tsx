import * as React from 'react';
import { Currency } from '../model';
import { clearFix } from '../utils/StylesHelper';
import { convertWithMargin } from '../utils/CurrencyHelper';

const style: React.CSSProperties = {
    color: '#FFF',
    margin: '5px',
    padding: '5px',
    width: '45%',
    fontWeight: 'bold'
}

const getStyles = (action: string, selected: string): React.CSSProperties => {
    return {
        ...style,
        backgroundColor: action === 'buy' ? '#12607a': '#a51b0c',
        float: action === 'buy' ? 'right': 'left',
        opacity: action === selected ? 1 : 0.7
    }
}

/*
** this function returns the right layout depending in if
** is buying or selling
*/
const getExchange = ( currency: string, values: Currency, action: string ): JSX.Element => {
    if (action !== 'buy') {
        return (
            <div>
                <div style={{float: 'left', width: '50%', textAlign: 'left'}}>Sell {currency}</div>
                <div style={{float: 'right', width: '50%', textAlign: 'right'}}>{values.rates[currency]}</div>
                <div style={clearFix} />
            </div>
        )
    } else {
        return (
            <div>
                <div style={{float: 'left', width: '50%', textAlign: 'left'}}>{values.rates[currency]}</div>
                <div style={{float: 'right', width: '50%', textAlign: 'right'}}>Buy {currency}</div>
                <div style={clearFix} />
            </div>
        )
    }
}

const getRateWithMargin = (rate: string, action: string ): JSX.Element => {
    const value = convertWithMargin(action, rate);

    return (
        <div style={{fontSize: '80px'}}>
            {value}
        </div>
    )
}

interface BuySellProps {
    type: 'sell' | 'buy',
    currency: Currency,
    selectedCurrency: string;
    selectedAction: string,
    handleClick: (action: string) => void
}

export const BuySell = (props: BuySellProps): JSX.Element => {
    return (
        <a
            style={getStyles(props.type, props.selectedAction)}
            onClick={() => props.handleClick(props.type)}>
            {getExchange(props.selectedCurrency, props.currency, props.type )}
            {getRateWithMargin(props.currency.rates[props.selectedCurrency], props.type )}
        </a>
    )
};