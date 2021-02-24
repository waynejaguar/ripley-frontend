export const USER_TOKEN = '12345';

export const getToken = () => localStorage.getItem(USER_TOKEN);

export const setToken = (token) => {
    localStorage.setItem(USER_TOKEN, token);
};

export const removeToken = () => {
    localStorage.removeItem(USER_TOKEN);
};
