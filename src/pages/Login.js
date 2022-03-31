import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  validation = () => {
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/; // regex https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    const sixValidation = 6;
    if ((password.length >= sixValidation) && (regex.test(email))) {
      return false;
    }
    return true;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // this.validation();
  }

  render() {
    const { email, password } = this.state;
    const { user } = this.props;
    return (
      <div>
        <h1>Login</h1>
        <input
          type="text"
          onChange={ this.handleChange }
          placeholder="E-mail"
          data-testid="email-input"
          value={ email }
          name="email"
        />
        <input
          type="password"
          onChange={ this.handleChange }
          placeholder="Senha"
          data-testid="password-input"
          value={ password }
          name="password"
        />
        <Link to="/carteira">
          <button
            type="submit"
            disabled={ this.validation() }
            onClick={ () => user({ email }) }
          >
            Entrar

          </button>
        </Link>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  user: (elem) => dispatch(userAction(elem)),
});

Login.propTypes = {
  user: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
