import axios from 'axios';

import { getToken, removeToken } from '../auth/TokenStorage';

export function logout() {
    removeToken();
}

export function logged() {
    return getToken() !== null;
}

export const getUserToken = (response) => {
    const { data } = response;
    if (data.statusCode === 401) return undefined;
    return data.token;
};

export function login({ username, password }) {
    return axios.post(`localhost:8080/api/login`,
        { username, password },

    );
}