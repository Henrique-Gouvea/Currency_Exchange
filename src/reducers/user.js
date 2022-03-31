import { USER_LOGIN } from '../actions/actionsType';

const initialState = {
  email: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case USER_LOGIN:
    return {
      ...state,
      email: action.user.email,
    };
  default:
    return state;
  }
}

export default userReducer;
