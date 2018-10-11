import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { CurrenciesDropDown } from '..';
import { Currency } from '../../model';

describe('<CurrenciesDropDown>', () => {
    let clickMock: () => void;
    let wrapper: ReactWrapper;

    const mockCurrency: Currency = {
        base: 'USD',
        rates: {
            CHF: '1.1',
            GBP: '1.2',
            EUR: '1.3'
        }
    };
    beforeEach(() => {
        clickMock = jest.fn();
        wrapper = mount(<CurrenciesDropDown
                selected={'EUR'}
                currencies={mockCurrency.rates}
                handleSelect={clickMock} />);
    });

    it('Should render the expected template', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.prop('currencies')).toEqual(mockCurrency.rates);
        expect(wrapper.prop('selected')).toEqual('EUR');
    })

    it('should call the function passed on click', () => {
        wrapper.find('select').simulate('change', {target: { value : 'CHF'}});
        expect(clickMock).toHaveBeenCalledWith('CHF');
    });

})