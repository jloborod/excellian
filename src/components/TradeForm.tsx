import * as React from 'react';
import { clearFix } from '../utils/StylesHelper';
import { Button, Input } from './';

interface TradeFormProps {
    onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: () => void,
    typedValue: string,
    prospectValue: string,
    selectedCurrency: string;
    selectedAction: string;
}

export const TradeForm: React.SFC<TradeFormProps> = (props): JSX.Element => {
    return (
        <div>
            <div style={{float: 'left', width: '35%', marginLeft: '5px'}}>
                <Input
                    type="text"
                    value={props.typedValue}
                    onChange={props.onValueChange}
                    placeholder="Type an amount" />   
                    {props.selectedCurrency}         
            </div>
            <div style={{float: 'left', width: '35%', marginLeft: '30px'}}>
                <Input
                    type="text"
                    value={props.prospectValue}
                    disabled={true}/>
                    USD
            </div>
            <div style={{float: 'right', width: '20%', textAlign: 'right'}}>
                <Button
                    disabled={!props.typedValue || !props.selectedAction}
                    clicked={props.onSubmit}>RFS</Button>            
            </div>
            <div style={clearFix} />
        </div>
    )
};