import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { getToken, removeToken } from '../../auth/TokenStorage';
//import uuid from 'uuid';

var requestInterceptor = 0;
var responseInterceptor = 0;

export default function ErrorHandlerPresenter({ children, redirectToLogin, onSessionExpires }) {
    axios.interceptors.request.eject(requestInterceptor);
    axios.interceptors.response.eject(responseInterceptor);

    if (redirectToLogin) {
        return <Redirect to="/login" />;
    }

    requestInterceptor = axios.interceptors.request.use((req) => {
        req.headers['X-User-Token'] = getToken();
        req.headers['Content-Type'] = 'application/json';
        return req;
    });

    responseInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
            if (error.response && error.response.status === 401) {
                // eslint-disable-next-line no-alert
                alert('Sesión expirada!');
                removeToken();
                onSessionExpires();
            }
            throw error;
        },
    );

    return children;
}

ErrorHandlerPresenter.propTypes = {
    children: PropTypes.node.isRequired,
    redirectToLogin: PropTypes.bool.isRequired,
    onSessionExpires: PropTypes.func.isRequired,
};
