import * as React from 'react';

const style: React.CSSProperties = {
    width: '73%',
    lineHeight: '30px',
    paddingLeft: '5px',
    marginRight: '5px'
}

const isNumberKey = (evt: React.KeyboardEvent<HTMLInputElement>):void => {
   const charCode = (evt.which) ? evt.which : evt.keyCode;
   if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
   }
}


interface InputProps {
    type: string;
    value?: string | number;
    disabled?: boolean;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps): JSX.Element => (
    <input
        onKeyPress={isNumberKey}
        type={props.type}
        style={style}
        value={props.value}
        disabled={props.disabled}
        placeholder={props.placeholder}
        onChange={props.onChange} />
);

