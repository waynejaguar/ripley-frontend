import React from 'react';
import {
    Route,
    Router,
    Switch,
    withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from './routes';

function Navigator({ history }) {
    return (
        <Router history={history}>
            <Switch>
                {routes.map(route => (
                    <Route exact key={route.path} path={route.path} component={route.component} />
                ))}
            </Switch>
        </Router >
    );
}

Navigator.propTypes = {
    history: PropTypes.object.isRequired,
};

export default withRouter(Navigator);
