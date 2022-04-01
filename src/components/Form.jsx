import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCurrencies from '../services/Api';
import { actionExpenses, actionAsk } from '../actions';

const ALIMENTACAO = 'Alimentação';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ALIMENTACAO,
      exchangeRates: '',
    };
  }

  handleChange = async (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  clearState = () => {
    console.log('aki');
    this.setState({
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ALIMENTACAO,
      exchangeRates: '',
    });
  }

teste = async () => {
  const { state } = this;
  const { expenses, expensesStore, ask } = this.props;
  const exchangeRates = await fetchCurrencies();
  const valueAskCoin = exchangeRates[state.currency].ask;
  ask(valueAskCoin * state.value);
  expenses({ ...state, exchangeRates, id: expensesStore.length, valueAskCoin });
}

  addExpenses = (event) => {
    event.preventDefault();
    this.teste();
    this.clearState();
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <input
          placeholder="Valor"
          type="text"
          value={ value }
          name="value"
          data-testid="value-input"
          onChange={ this.handleChange }
        />
        <input
          placeholder="Descrição"
          type="text"
          value={ description }
          name="description"
          data-testid="description-input"
          onChange={ this.handleChange }
        />
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            onChange={ this.handleChange }
            value={ currency }
          >
            {currencies.map((cur) => (
              <option
                value={ cur }
                key={ cur }
              >
                {cur}
              </option>
            ))}
          </select>
        </label>
        <select
          name="method"
          data-testid="method-input"
          onChange={ this.handleChange }
          value={ method }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          name="tag"
          data-testid="tag-input"
          onChange={ this.handleChange }
          value={ tag }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        <button
          type="submit"
          onClick={ this.addExpenses }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expensesStore: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expenses: (elem) => dispatch(actionExpenses(elem)),
  ask: (elem) => dispatch(actionAsk(elem)),
});

Form.propTypes = {
  currencies: PropTypes.array,
  expenses: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
