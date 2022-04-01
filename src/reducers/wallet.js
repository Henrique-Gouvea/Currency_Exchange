// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_CURRENCIES, EXPENSES, ASK } from '../actions/actionsType';

const initialState = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_CURRENCIES:
    return {
      ...state,
      currencies: [action.currencies][0],
    };
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case ASK:
    return {
      ...state,
      ask: state.ask + action.ask,
    };
  default:
    return state;
  }
}

export default walletReducer;
