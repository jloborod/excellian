import * as React from 'react';
import { Currency } from '../model';
import { BuySell, TradeForm } from './';
import { clearFix } from '../utils/StylesHelper';

const style: React.CSSProperties = {
    border: '1px solid #bbbbbb',
    boxShadow: '2px 2px 2px',
    color: '#272727',
    margin: 'auto',
    maxWidth: '700px',
    minWidth: '400px',
    padding: '5px',
    textAlign: 'center',
    width: '60%',
}

const displaySelectMessage = (props: MainContentProps): JSX.Element | null => {
    if (!props.selectedAction){
        return (
            <div>Please click on Buy or Sell</div>
        )
    }

    return  <TradeForm
    selectedCurrency={props.selectedCurrency}
    selectedAction={props.selectedAction}
    typedValue={props.typedValue}
    onValueChange={props.onValueChange}
    onSubmit={props.onSubmit}
    prospectValue={props.prospectValue} />
;
}

interface MainContentProps {
    currency: Currency,
    handleClick: (action: string) => void,
    onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: () => void,
    selectedCurrency: string,
    selectedAction: string,
    typedValue: string,
    prospectValue: string
}

export const MainContent = (props: MainContentProps): JSX.Element => {
    return (
        <div style={style}>
            <BuySell
                type={'sell'}
                handleClick={ props.handleClick }
                currency={props.currency}
                selectedCurrency={props.selectedCurrency}
                selectedAction={props.selectedAction} />
            <BuySell
                type={'buy'}
                handleClick={ props.handleClick }
                currency={props.currency}
                selectedCurrency={props.selectedCurrency}
                selectedAction={props.selectedAction} />
            <div style={clearFix} />
            {displaySelectMessage(props)}
        </div>
    )
};