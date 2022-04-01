import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
// import teste from '../services/Api';
import { actionFetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount = async () => {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  };

  render() {
    return (
      <>
        <Header />
        <p>teste</p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(actionFetchCurrencies()),
});

Wallet.propTypes = {
  fetchCurrencies: PropTypes.function,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
