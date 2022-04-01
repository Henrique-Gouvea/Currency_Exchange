// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_CURRENCIES, EXPENSES, ASK, EXPENSES_REMOVE } from '../actions/actionsType';

const initialState = {
  currencies: [],
  expenses: [],
  ask: 0,
};

function walletReducer(state = initialState, action) {
  const teste = 0.001;
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
      ask: ((Number(state.ask) + Number(action.ask) - teste).toFixed(2)),
    };
  case EXPENSES_REMOVE:
    return {
      ...state,
      ask: (state.ask - action.ask).toFixed(2),
      expenses: action.expenses,
    };
  default:
    return state;
  }
}

export default walletReducer;
