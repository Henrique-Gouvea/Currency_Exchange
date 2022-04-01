import { USER_LOGIN, FETCH_CURRENCIES } from './actionsType';
import fetchCurrencies from '../services/Api';

export const userAction = (user) => ({
  type: USER_LOGIN,
  user,
});

// export const walletAction = (value) => ({
//   type: WALLET,
//   value,
// });

export const actionUpdateCurrencies = (currencies) => ({
  type: FETCH_CURRENCIES,
  currencies,
});

export const actionFetchCurrencies = () => async (dispatch) => {
  const Obj = await fetchCurrencies();
  const currencies = Object.keys(Obj);
  const currenciesOK = currencies.filter((ele) => ele !== 'USDT');
  console.log(currenciesOK);
  dispatch(actionUpdateCurrencies(currenciesOK));
};
