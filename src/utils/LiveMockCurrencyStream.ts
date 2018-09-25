import { Currency } from "../model";
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

/* 
** function that generates a random number with 2 decimals
*/
const  getRandomPrice = (min: number, max: number): string => (Math.random() * (max - min) + min).toFixed(2);

/* 
** function that generates a random currency record
*/
const randomeCurrency = (): Currency => ({
    base: 'USD',
    rates: {
        CHF: getRandomPrice(1,2),
        EUR: getRandomPrice(1,2),
        GBP: getRandomPrice(1,2)
    }   
});

/* 
** function that returns an stream obserbvable a random currency record every 0,5 s
*/
export const livePrices = () => {
    return interval(500)
                .pipe(
                    map( () => {
                        const value = randomeCurrency();
                        return value;
                    })
                );
};
