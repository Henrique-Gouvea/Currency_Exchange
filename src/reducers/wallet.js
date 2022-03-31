// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET } from '../actions/actionsType';

const initialState = {
  currencies: [],
  expenses: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case WALLET:
    return action.value;
  default:
    return state;
  }
}

export default userReducer;
