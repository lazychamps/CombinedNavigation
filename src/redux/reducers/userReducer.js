import {USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS} from '../actionTypes';

const INITIAL_STATE = {
  token: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
