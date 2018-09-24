import * as React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { BuySell } from '../';
import { Currency } from '../../model';

configure({adapter: new Adapter()});

describe('<BuySell>', () => {
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
    
    describe('When is buying', () => {
        beforeEach(() => {
            clickMock = jest.fn();
            wrapper = mount(<BuySell
                type={'buy'}
                handleClick={ clickMock }
                currency={mockCurrency}
                selectedCurrency={'EUR'}
                selectedAction={'buy'} />);
    
        });    
    
        it('Should render the expected template', () => {
            expect(wrapper).toMatchSnapshot();
            expect(wrapper.prop('currency')).toEqual(mockCurrency);
            expect(wrapper.prop('selectedCurrency')).toEqual('EUR');
            expect(wrapper.prop('selectedAction')).toEqual('buy');
        })
    
        it('should call the function passed on click', () => {
            wrapper.find('a').simulate('click');
            expect(clickMock).toHaveBeenCalledWith('buy');
        });
    
    })

    describe('When is selling', () => {
        beforeEach(() => {
            clickMock = jest.fn();
            wrapper = mount(<BuySell
                type={'sell'}
                handleClick={ clickMock }
                currency={mockCurrency}
                selectedCurrency={'EUR'}
                selectedAction={'sell'} />);
    
        });    
    
        it('Should render the expected template', () => {
            expect(wrapper).toMatchSnapshot();
            expect(wrapper.prop('currency')).toEqual(mockCurrency);
            expect(wrapper.prop('selectedCurrency')).toEqual('EUR');
            expect(wrapper.prop('selectedAction')).toEqual('sell');
        })
    
        it('should call the function passed on click', () => {
            wrapper.find('a').simulate('click');
            expect(clickMock).toHaveBeenCalledWith('sell');
        });
    
    })
})