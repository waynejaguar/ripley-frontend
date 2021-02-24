import { IconButton, makeStyles } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React from 'react';
import { colors } from '../../appearance/theme';
import LoginTextField from './LoginTextField';


const useStyles = makeStyles(theme => ({
    grid: {
        padding: theme.spacing(0, 2),
    },
    visibilityButton: {
        float: 'right',
        marginBottom: -10, // TODO: review this. Maybe we can find a better way to move components closer
        color: colors.gray,
        '&:hover': {
            backgroundColor: colors.white,
            color: colors.darkBlue,
        },
    },
    visibilityButtonIcon: {
        height: 17,
        width: 30,
    },
    visibilityButtonText: {
        fontSize: 14, // TODO: move to Typography
    },
}));

export default function PasswordField({
                                          id, name, label, onChange, error = false, ...props
                                      }) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const classes = useStyles();
    return (
        <React.Fragment>
            <IconButton size="small"
                        edge="start"
                        color="inherit"
                        name="iconButton"
                        disableRipple={true}
                        disableFocusRipple={true} className={classes.visibilityButton}
                        onClick={handleClickShowPassword}>
                {showPassword
                    ? <VisibilityOffIcon className={classes.visibilityButtonIcon} />
                    : <VisibilityIcon className={classes.visibilityButtonIcon} />}
                <span className={classes.visibilityButtonText}>{showPassword ? 'Ocultar' : 'Mostrar'}</span>
            </IconButton>
            <LoginTextField
                id={id}
                name={name}
                label={label}
                className={classes.field}
                type={showPassword ? 'text' : 'password'}
                onChange={onChange}
                error={error}
                {...props} />
        </React.Fragment>
    );
}

PasswordField.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
};
