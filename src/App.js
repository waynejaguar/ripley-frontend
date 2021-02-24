import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './appearance/theme';
import RootRouter from './navigation/RootRouter';


const App = ({ store }) => (
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <RootRouter />
        </MuiThemeProvider>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object,
};

export default App;
