export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const loginRequest = ({ username, password }) => ({ type: LOGIN_REQUEST, payload: { username, password } });
export const loginSuccess = ({ token }) => ({ type: LOGIN_SUCCESS, payload: { token } });
export const loginFailure = () => ({ type: LOGIN_FAILURE, payload: {} });
export const clearErrors = () => ({ type: CLEAR_ERRORS, payload: {} });
export const logOut = () => ({ type: LOGOUT, payload: {} });

