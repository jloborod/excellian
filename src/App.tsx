import { Currency } from './model';
import * as React from 'react';
import { Subscription } from 'rxjs';

import { livePrices } from './utils/LiveMockCurrencyStream';
import { Header, MainContent, CurrenciesDropDown } from './components';
import { convertWithMargin } from './utils/CurrencyHelper';

const style: React.CSSProperties = {
  textAlign: 'center'
}

interface AppState {
  currency: Currency,
  selectedAction: string;
  selectedCurrency: string;
  typedValue: string;
  prospectValue: string;
}

const convertToCurrency = (
  value: string,
  currencies: Currency,
  selectedCurrency: string,
  action: string = 'buy'): string => {
  if (!value) {
    return '';
  }
  return (Number.parseFloat(value) *
    Number.parseFloat(convertWithMargin(action, currencies.rates[selectedCurrency])))
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export class App extends React.PureComponent<{}, AppState, {}> {
  private livePrices$: Subscription;

  public componentDidMount = () => {
    // we select the default currency
    this.setState({
      selectedCurrency: 'EUR',
      typedValue: ''
    })
    this.livePrices$ = livePrices().subscribe(
      currency => {
        const typedValue = this.state.typedValue || ''; // we want to avoid undefined values
        this.setState({
          currency,
          prospectValue: convertToCurrency(
            typedValue.toString(),
            currency,
            this.state.selectedCurrency,
            this.state.selectedAction)
        });
      }
    );
  };

  public handleSelectedAction = (action: string) => {
    this.setState({
      selectedAction: action,
      prospectValue: convertToCurrency(
        this.state.typedValue.toString(),
        this.state.currency,
        this.state.selectedCurrency,
        action)
    })
  }

  public handleSelectedCurrency = (currency: string) => {
    this.setState(
      {
        selectedCurrency: currency,
        prospectValue: convertToCurrency(
          this.state.typedValue.toString(),
          this.state.currency,
          currency,
          this.state.selectedAction)
  
      }
    )
  }

  public componentWillUnmount = ()=> {
    this.livePrices$.unsubscribe();
  }

  public onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = convertToCurrency(
      event.target.value,
      this.state.currency,
      this.state.selectedCurrency,
      this.state.selectedAction
    );
    this.setState(
      {
        typedValue: event.target.value,
        prospectValue: value
      }
    );
  }

  public onSubmit = () => {
    alert('You ' + (this.state.selectedAction === 'buy' ? 'bought' : 'sold') + ' ' +
    this.state.prospectValue + ' ' + this.state.selectedCurrency);
  }

  public render() {
    if (!this.state || !this.state.currency){
      return (
        <h1 style={{textAlign: 'center'}}>Loading...</h1>
      )
    }
    return (
      <div style={style}>
        <Header />
        <CurrenciesDropDown
          currencies={this.state.currency.rates}
          selected={this.state.selectedCurrency}
          handleSelect={this.handleSelectedCurrency} />
        <MainContent
          onValueChange={this.onValueChange}
          onSubmit={this.onSubmit}
          prospectValue={this.state.prospectValue}
          typedValue={this.state.typedValue}
          currency={this.state.currency}
          selectedCurrency={this.state.selectedCurrency}
          selectedAction={this.state.selectedAction}
          handleClick={this.handleSelectedAction}/>
      </div>
    );
  }
}