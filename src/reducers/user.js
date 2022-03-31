import { USER_LOGIN } from '../actions/actionsType';

const initialState = {
  name: '',
  email: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case USER_LOGIN:
    return action.value;
  default:
    return state;
  }
}

export default userReducer;
