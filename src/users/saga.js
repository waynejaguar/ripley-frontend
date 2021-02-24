import { takeEvery, put, call } from 'redux-saga/effects';
import {
    LOGIN_REQUEST, loginFailure, loginSuccess,
} from './actions';
import { getUserToken, login } from '../services/loginService';
import { setToken } from '../auth/TokenStorage';

export function* loginSaga({ payload }) {
    try {
        const { username, password } = payload;
        const response = yield call(login, {
            username,
            password,
        });
        const token = getUserToken(response);
        if (token !== undefined) {
            setToken(token);
            yield put(loginSuccess({ token }));
            return;
        }
        yield put(loginFailure());
    } catch (error) {
        yield put(loginFailure());
    }
}

export default function* watcher() {
    yield takeEvery(LOGIN_REQUEST, loginSaga);
}
