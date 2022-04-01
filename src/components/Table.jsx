import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionRemoveExpenses } from '../actions';

class Table extends React.Component {
  getExchangeRates = (obj) => {
    const currency = obj.exchangeRates[obj.currency];
    return [currency.name, currency.ask];
  }

  btnOnClick = ({ target }) => {
    const { expenses, expensesDispa } = this.props;
    const exludedCurrie = expenses.filter((exp) => Number(exp.id) !== Number(target.id));
    const getAsk = expenses.find((exp) => Number(exp.id) === Number(target.id));
    const teste = (getAsk.valueAskCoin * getAsk.value);
    console.log(teste);
    expensesDispa(exludedCurrie, teste);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Tag</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Câmbio utilizado</th>
            <th scope="col">Valor convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={ exp.id }>
              <td>{exp.description}</td>
              <td>{exp.tag}</td>
              <td>{exp.method}</td>
              <td>{Number(exp.value).toFixed(2)}</td>
              <td>{this.getExchangeRates(exp)[0]}</td>
              <td>{Number(this.getExchangeRates(exp)[1]).toFixed(2)}</td>
              <td>
                {
                  (this.getExchangeRates(exp)[1] * Number(exp.value)).toFixed(2)
                }

              </td>
              <td>Real</td>
              <td>
                <button type="button">Editar</button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  id={ exp.id }
                  onClick={ this.btnOnClick }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expensesDispa: (elem, ele) => dispatch(actionRemoveExpenses(elem, ele)),
});

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
