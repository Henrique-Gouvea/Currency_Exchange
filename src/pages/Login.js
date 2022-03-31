import React from 'react';
import { connect } from 'react-redux';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      btn: true,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/; // regex https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    const fiveValidation = 5;
    if ((regex.test(email)) && (password.length > fiveValidation)) {
      this.setState({ btn: false });
    }
  }

  render() {
    const { email, password, btn } = this.state;
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
        <button type="submit" disabled={ btn }>Entrar</button>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  user: (elem) => dispatch(userAction(elem)),
});

export default connect(null, mapDispatchToProps)(Login);
