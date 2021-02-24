import { combineReducers } from 'redux';
import { getToken as getStoredToken } from '../auth/TokenStorage';
import { logged } from '../services/loginService';
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, CLEAR_ERRORS, LOGOUT,
} from './actions';

const initialLoginState = {
    redirectToHome: logged(),
    token: getStoredToken(),
};

function loginReducer(state = initialLoginState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                token: null,
                redirectToHome: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                token: action.payload.token,
                redirectToHome: true,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                token: null,
                redirectToHome: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: false,
            };
        case LOGOUT:
            return {
                ...state,
                error: false,
                loading: false,
                token: null,
                redirectToHome: false,
            };
        default:
            return state;
    }
}

export const getLoginLoading = state => state.user.login.loading;
export const getLoginError = state => state.user.login.error;
export const getRedirectToHome = state => state.user.login.redirectToHome;
export const getToken = state => state.user.login.token;

export default combineReducers({
    login: loginReducer,
});
