import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigator from '../../navigation/main/Navigator';
import { menuWidth } from '../../appearance/theme';
import { makeStyles } from '@material-ui/core';
import ApplicationBarContainer from '../containers/ApplicationBarContainer';
import LateralMenuContainer from '../containers/LateralMenuContainer';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    lateralMenu: {
        [theme.breakpoints.up('lg')]: {
            width: menuWidth,
        },
    },
    navigator: {
        height: '100vh !important',
        maxHeight: '100vh !important',
        overflowY: 'scroll',
        overflowX: 'hidden',
        [theme.breakpoints.up('lg')]: {
            marginLeft: menuWidth,
        },
    },
    content: {
        margin: 0,
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: 16,
        },
    },
}));

export default function MainLayout() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesCaseSm = useMediaQuery(theme.breakpoints.down('sm'));
    const history = useHistory();

    return (
        <React.Fragment>
            <header>
                <ApplicationBarContainer />
            </header>
            <nav className={classes.lateralMenu} >
                <LateralMenuContainer />
            </nav>
            <main className={classes.navigator}>
                <Grid
                    id='main-grid'
                    style={{ padding: (matchesCaseSm && history.location.pathname === '/' ? 0 : (matchesCaseSm ? 16 : 0)) }}
                    className={classes.content}
                    container
                    spacing={4}
                    direction='column' >
                    <Navigator />
                </Grid>
            </main>
        </React.Fragment >
    );
}
