import { USER_LOGIN,
  FETCH_CURRENCIES,
  EXPENSES,
  ASK,
  EXPENSES_REMOVE } from './actionsType';
import fetchCurrencies from '../services/Api';

export const userAction = (user) => ({
  type: USER_LOGIN,
  user,
});

export const actionUpdateCurrencies = (currencies) => ({
  type: FETCH_CURRENCIES,
  currencies,
});

export const actionFetchCurrencies = () => async (dispatch) => {
  const Obj = await fetchCurrencies();
  const currencies = Object.keys(Obj);
  const currenciesOK = currencies.filter((ele) => ele !== 'USDT');
  dispatch(actionUpdateCurrencies(currenciesOK));
};

export const actionExpenses = (expenses) => ({
  type: EXPENSES,
  expenses,
});

export const actionAsk = (ask) => ({
  type: ASK,
  ask,
});

export const actionRemoveExpenses = (expenses, ask) => ({
  type: EXPENSES_REMOVE,
  expenses,
  ask,
});
