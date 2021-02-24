import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
/*
import { whitelogo } from './../../assets/';
*/

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: theme.spacing(2),
    },
    menuIcon: {
        verticalAlign: 'middle',
        width: theme.spacing(4),
    },
    iconButton: {
        verticalAlign: 'middle',
        cursor: 'auto',
    },
    homeLink: {
        cursor: 'pointer',
    },
    logo: {
        paddingTop: 8,
        width: 97,
        height: 35
    }
}));

export default function ApplicationBarPresenter({ showMenuButton, onMenuOpen }) {
    const classes = useStyles();
    const history = useHistory();
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <Link color="inherit" onClick={() => history.push('/')} underline='none' className={classes.homeLink}>
                        <img
                            className={classes.logo}
/*
                            src={whitelogo}
*/
                            alt="Ripley Logo"
                        />
                    </Link>
                </Typography>
                <Hidden lgUp>
                    {showMenuButton
                        ? <IconButton id="menu-button" color="inherit" className={classes.iconButton} onClick={onMenuOpen} >
                            <MenuIcon className={classes.menuIcon} />
                        </IconButton>
                        : null}
                </Hidden>
            </Toolbar>
        </AppBar >
    );
}

ApplicationBarPresenter.propTypes = {
    showMenuButton: PropTypes.bool,
    onMenuOpen: PropTypes.func,
};
