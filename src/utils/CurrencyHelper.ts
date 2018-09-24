/*
** this function coverts the currency into $dollars 
** and adds a 10% margin profit for whatever the user buys or sell
*/
export const convertWithMargin = (action: string, rate: string): string => {
    if (action === 'buy') {
        return  ((1 / Number.parseFloat(rate)) / 1.10).toFixed(2);
    }

    return ((1 / Number.parseFloat(rate)) * 1.10).toFixed(2);
}