import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  getExchangeRates = (obj) => {
    const currency = obj.exchangeRates[obj.currency];
    return [currency.name, currency.ask];
  }

  render() {
    const { expenses } = this.props;
    console.log(expenses);

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
            </tr>
          ))}
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Table);
