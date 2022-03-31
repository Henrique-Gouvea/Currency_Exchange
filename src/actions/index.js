import { USER_LOGIN, WALLET } from './actionsType';

export const userAction = (user) => ({
  type: USER_LOGIN,
  user,
});

export const walletAction = (value) => ({
  type: WALLET,
  value,
});
