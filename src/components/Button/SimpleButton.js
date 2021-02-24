import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../appearance/theme';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        height: '48px',
        width: '100%',
        fontWeight: 'Bold',
        fontSize: '18px',
        borderRadius: '30px',
        minWidth: '200px',
    },
    containedPrimary: {
        boxShadow: '0 14px 20px rgba(0,0,0,0.10), 0 3px 3px rgba(0,0,0,0.30)',
        '&:hover': {
            backgroundColor: colors.hoverDarkBlue,
            boxShadow: '0 14px 40px rgba(0,0,0,0.10), 0 8px 8px rgba(0,0,0,0.15)',
        },
        '&:active': {
            backgroundColor: colors.wmtBlue,
            boxShadow: '0 14px 40px rgba(0,0,0,0.10), 0 8px 8px rgba(0,0,0,0.15)',
        }
    },

    label: {
        textTransform: 'none',
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        }
    },
    circularProgress: {
        marginRight: '9px'
    },
    disabled: {
        color: colors.disableButtom + ' !important'
    },
    loadingButtom: {
        zIndex: 10000000
    }
}));

const defaultConfig = {
    variant: 'contained',
    color: 'primary',
    loadingText: 'Cargando'
};

const capitalize = (text) => {
    if (typeof text !== 'string') return '';
    text = text.trim();
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export default function SimpleButton({
                                         text, title, classes = {}, disabled, component, onClick, buttonType, variant, endIcon, startIcon, ...props
                                     }) {

    const buttonClasses = useStyles();
    variant = variant || defaultConfig.variant;
    const renderButtomByType = (type) => {

        switch (type) {
            case 'loading':
                text = text || defaultConfig.loadingText;
                return (
                    <Button name={title} disabled={true} className={buttonClasses.loadingButtom}
                            classes={{ root: buttonClasses.root, containedPrimary: buttonClasses.containedPrimary, label: buttonClasses.label }}
                            color={defaultConfig.color} variant={variant} size="large" type="submit" title={title}
                            {...props}>
                        <>
                            <CircularProgress className={buttonClasses.circularProgress} color="inherit" size={23} />
                            <span>{capitalize(text)}</span>
                        </>
                    </Button>
                );
            default:
                return (
                    <Button name={title} className={buttonClasses.button}
                            classes={{
                                root: buttonClasses.root, containedPrimary: buttonClasses.containedPrimary, label: buttonClasses.label,
                                disabled: buttonClasses.disabled
                            }}
                            variant={variant} color={defaultConfig.color} size="large" type="submit" title={title} disabled={disabled} component={component}
                            onClick={onClick} endIcon={endIcon} startIcon={startIcon}
                            {...props}>
                        <span>  {capitalize(text)} </span>
                    </Button>
                );
        }
    };

    return (
        <div className={classes.button || ''}>
            {renderButtomByType(buttonType)}
        </div>
    );
}

SimpleButton.propTypes = {
    component: PropTypes.any,
    text: PropTypes.string,
    title: PropTypes.string,
    classes: PropTypes.object,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    buttonType: PropTypes.oneOf(['loading', 'simple']),
    variant: PropTypes.oneOf(['outlined', 'contained', 'text']),
    endIcon: PropTypes.any,
    startIcon: PropTypes.any,
};
