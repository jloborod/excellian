export interface Currency {
    base: string;
    rates: Rate;    
}

export interface Rate {
    CHF: string;    
    EUR: string;    
    GBP: string;    
}