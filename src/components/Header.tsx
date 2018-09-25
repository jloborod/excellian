import * as React from 'react';

const style: React.CSSProperties = {
    backgroundColor: '#272727',
    color: '#FFF',
    fontSize: '20px',
    padding: '17px',
    textAlign: 'center',
}

export const Header: React.SFC = (): JSX.Element => {
    return (
        <div style={style}>
            Currency Exchange Test
        </div>
    )
};