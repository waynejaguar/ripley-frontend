import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    container: {
        margin: '0 auto',
        marginTop: '48px',
        border: '0px solid red',
        width: '95%',
        color: 'black',
        paddingRight: '1%',
        [theme.breakpoints.down('sm')]: {
            padding: 8,
            margin: '0 auto',
            marginLeft: 0,
            marginTop: '48px',
        }
    },
    welcomeSetion: {
        backgroundColor: '#0071ce',
        padding: '3rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0',
            border: '1px solid black',
            margin: '0',
        }
    }
}));


export default function WelcomePagePresenter() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.appBarSpacer} />
            <div className={classes.welcomeSetion}>

            </div>
            <div className={classes.container}>

            </div>
        </>
    );
}
