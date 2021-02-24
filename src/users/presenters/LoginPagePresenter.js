import React from 'react';
import {
    CardMedia,
    CircularProgress,
    Container,
    Grid,
    makeStyles,
    Link
} from '@material-ui/core';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import ApplicationBarContainer
    from '../../main/containers/ApplicationBarContainer';
import {logoRipley}  from '../../assets';
import {colors} from '../../appearance/theme';
import CollapsibleAlert from '../../components/CollapsibleAlert/CollapsibleAlert';
import SimpleButton from '../../components/Button/SimpleButton';
import LinkedDialog from '../../components/LinkedDialog/LinkedDialog';
import PasswordField from '../../components/Inputs/PasswordField';
import { formatRut, cleanRut } from '../../helpers/form';
import LoginTextField from "../../components/Inputs/LoginTextField";



const useStyles = makeStyles(theme => ({
    container: {
        background: colors.white,
        maxWidth: 604,
        marginTop: 140,
        [theme.breakpoints.up('xs')]: {
            padding: '20px 0',
        },
        [theme.breakpoints.up('sm')]: {
            padding: '20px 60px',
        },
        [theme.breakpoints.up('lg')]: {
            padding: '40px 104px',
        },
    },
    logo: {
        margin: 'auto',
        width: 221,
        height: 77,
    },
    loginGrid: {
        width: '100%',
        padding: '0 16px', // TODO: review if we can remove these padding all across the component
    },
    header: {
        padding: 0,
    },
    form: {
        padding: '0 20px',
    },
    button: {
        marginTop: 8,
    },
    passwordGridItem: {
        padding: '0 16px 16px 16px !important', // TODO: review this !important
    },
    progress: {
        margin: 'auto',
        display: 'block',
    },
    main: {
        backgroundColor: '#f8f9fb',
        height: '100vh',
    },
    help: {
        textAlign: 'center',
    },
    helpTextHader: {
        color: '#000000',
        fontSize: 18,
    },
    helpTextContent: {
        color: '#757575',
        fontSize: 16
    },
    helperContainer: {
        padding: 16
    }
}));

const alertMessage = 'Lo sentimos, usuario o contraseña no son correctas.';


export default function LoginPagePresenter({
                                              onSubmitButtonClicked, onInputChange, redirectToHome = false, error = false, loading = false,
                                          }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onPasswordChange = (e) => {
        const { value } = e.target;
        setPassword(value);
        onInputChange();
    };

    const onUsernameChange = (e) => {
        const { value } = e.target;
        setUsername(formatRut( value));
        onInputChange();
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            onSubmitButtonClicked({ username: cleanRut(username), password });
        }
    };

    const classes = useStyles();
    return (
        <React.Fragment>
            {redirectToHome ? <Redirect to='/' /> : null}
            <header>
                <ApplicationBarContainer />
            </header>
            <main className={classes.main}>
                <form name="form" onSubmit={onSubmit} >
                    <Grid id="login-grid" container justify="center" className={classes.loginGrid}>
                        <Grid item xs={12} md={6}>
                            <Container className={classes.container}>
                                <CardMedia
                                    component="img"
                                    alt="ripley"

                                    image={logoRipley}

/*
                                    image={require('../../assets/Logo_ripley.png')}
                                     image= {require ("../../assets/Logo_ripley.png")
*/
                                    title="ripley"
                                    classes={{ root: classes.MuiCardMediaRoot, media: classes.logo }}
                                />
                                <div className={classes.helperContainer}>
                                    <p>
                                        <span className={classes.helpTextHader}>
                                            Ingresa con tu <b> RUT y contraseña  </b>
                                        </span>
                                    </p>
                                    <p>
                                        <span className={classes.helpTextContent}>
                                            Bienvenido a Banco Ripley.
                                        </span>
                                    </p>
                                </div>
                                <Grid container spacing={4} direction="column" className={classes.form} >
                                    <Grid item xs={12}>
                                        <CollapsibleAlert open={error} id="error" severity="error">{alertMessage}</CollapsibleAlert>
                                        <LoginTextField id='username' name='username' label='Rut' onChange={onUsernameChange} error={error}
                                                        value={username} maxLength="12"/>
                                    </Grid>
                                    <Grid item xs={12} className={classes.passwordGridItem}>
                                        <PasswordField id='password' name='password' label='Contraseña' onChange={onPasswordChange} error={error}
                                                       value={password}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {loading ? <CircularProgress className={classes.progress} /> : <SimpleButton
                                            text="INICIAR SESIÓN"
                                            title="login"
                                            classes={{ button: classes.button }} />}
                                    </Grid>
                                    <Grid item xs={12} className={classes.help}>
                                        <LinkedDialog
                                            linkText="¿Tienes problemas para iniciar sesión?"
                                            title="¿Problemas para iniciar sesión?">
                                            El ingreso a CHAS es a través del uso de tu usuario y contraseña de Mi lugar.
                                            <br/><br/>
                                            Si tienes problemas con tu cuenta, puedes ir a recuperar tu contraseña
                                            desde <Link color="inherit" underline='always' target='_blank' href='https://milugar.walmartchile.cl/'>
                                            Mi lugar
                                        </Link> e intentar nuevamente.
                                        </LinkedDialog>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </form>
            </main>
        </React.Fragment>
    );
}

LoginPagePresenter.propTypes = {
    onSubmitButtonClicked: PropTypes.func,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    redirectToHome: PropTypes.bool,
    onInputChange: PropTypes.func,
};
