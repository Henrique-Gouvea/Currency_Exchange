import React from 'react';
import { connect } from 'react-redux';
import { userAction } from '../actions';

class Login extends React.Component {
  render() {
    return <div>Login</div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  user: (elem) => dispatch(userAction(elem)),
});

export default connect(null, mapDispatchToProps)(Login);
