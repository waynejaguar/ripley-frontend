import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPageContainer from '../users/containers/LoginPageContainer';
import MainLayout from '../main/layouts/MainLayouts';
import ErrorHandlerContainer from '../error/containers/ErrorHandlerContainer';

export default class RootRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={LoginPageContainer} />
                    <ErrorHandlerContainer>
                        <Route path='/' component={MainLayout} />
                    </ErrorHandlerContainer>
                </Switch>
            </BrowserRouter>
        );
    }
}
