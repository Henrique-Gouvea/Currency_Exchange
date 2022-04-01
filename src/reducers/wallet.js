// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_CURRENCIES } from '../actions/actionsType';

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
  default:
    return state;
  }
}

export default walletReducer;
