import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { value, description } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <input
          placeholder="Valor"
          type="text"
          value={ value }
          name="value"
          data-testid="value-input"
        />
        <input
          placeholder="Descrição"
          type="text"
          value={ description }
          name="description"
          data-testid="description-input"
        />
        <label htmlFor="coins">
          Moeda
          <select id="coins" name="coins">
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
        <select name="method" data-testid="method-input">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select name="category" data-testid="tag-input">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Form);
