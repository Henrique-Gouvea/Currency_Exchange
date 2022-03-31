import { USER_LOGIN, WALLET } from './actionsType';

export const user = (value) => ({
  type: USER_LOGIN,
  value,
});

export const wallet = (value) => ({
  type: WALLET,
  value,
});
