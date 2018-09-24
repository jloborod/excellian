import * as React from 'react';

const style: React.CSSProperties = {
    backgroundColor: '#BBB',
    color: 'white',
    fontSize: '18px',
    padding: '7px',
    border: '1px solid green',
    marginRight: '5px'
}

interface ButtonProps {
    children?: any;
    disabled: boolean;
    clicked: () => void
}

export const Button = (props: ButtonProps): JSX.Element => (
    <button
        style={ style }
        disabled={props.disabled}
        onClick={props.clicked}>{props.children}</button>
);

