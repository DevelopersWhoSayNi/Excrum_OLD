import * as types from '../ActionTypes';

let initialState = {
  UserName: 'HeWhoSays',
  UserPassword: 'Ni'
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case types.AddUser:
      return {
        ...state,
        UserName: action.userName,
        UserPassword: action.password
      };
    default:
      return state;
  }
}
