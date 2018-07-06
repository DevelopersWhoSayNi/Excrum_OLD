import * as types from '../ActionTypes';

export function addUser(userName, password) {
  return { type: types.AddUser, userName, password };
}

export function addUser2(userName, password) {
  return { type: types.AddUser, userName, password };
}
