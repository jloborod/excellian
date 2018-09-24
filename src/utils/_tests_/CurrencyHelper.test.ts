import { convertWithMargin } from '../CurrencyHelper';

describe('CurrencyHelper', () => {
    it('should add 10% margin and format the currency for buying', () => {
        expect(convertWithMargin('buy', '1.50')).toEqual('0.61');
    })

    it('should add 10% margin and format the currency for selling', () => {
        expect(convertWithMargin('sell', '1.50')).toEqual('0.73');
    })
})