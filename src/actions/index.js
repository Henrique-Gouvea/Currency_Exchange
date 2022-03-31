import { USER_LOGIN, WALLET } from './actionsType';

export const userAction = (value) => ({
  type: USER_LOGIN,
  value,
});

export const walletAction = (value) => ({
  type: WALLET,
  value,
});
