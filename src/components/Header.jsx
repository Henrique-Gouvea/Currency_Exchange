import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, ask } = this.props;
    return (
      <div>
        <h3>Trybewallet</h3>
        <h3 data-testid="email-field">{email}</h3>
        <h3 data-testid="total-field">{ask}</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  ask: state.wallet.ask,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
