import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCurrencies from '../services/Api';
import { actionExpenses } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      coins: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: '',
    };
  }

  handleChange = async (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  addExpenses = async (event) => {
    event.preventDefault();
    const { state } = this;
    const { expenses, expensesStore } = this.props;
    const exchangeRates = await fetchCurrencies();
    expenses({ ...state, exchangeRates, id: expensesStore.length });
  }

  render() {
    const { value, description, coins, method, tag } = this.state;
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
        <label htmlFor="coins">
          Moeda
          <select
            id="coins"
            name="coins"
            onChange={ this.handleChange }
            value={ coins }
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
});

Form.propTypes = {
  currencies: PropTypes.array,
  expenses: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
