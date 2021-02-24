import React from 'react';
import PropTypes from 'prop-types';
import { Alert as MuiAlert, AlertTitle } from '@material-ui/lab';
import { Info as InfoIcon, CheckCircle, Cancel as CancelIcon, ReportProblem as ReportProblemIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';

const getIconMapping = (severity) => {
    switch (severity) {
        case 'error': return { error: <CancelIcon fontSize="inherit" /> };
        case 'info': return { info: <InfoIcon fontSize="inherit" /> };
        case 'warning': return { warning: <ReportProblemIcon fontSize="inherit" /> };
        case 'success': return { success: <CheckCircle fontSize="inherit" /> };
        default:
            break;
    }
};
export default function Alert(props) {

    const alertStyles = makeStyles((theme) => ({
        standardInfo: {
            boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), inset 4px 0 0 0 #2196f3',
        },
        standardError: {
            boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), inset 4px 0 0 0 #f44336'
        },
        standardWarning: {
            boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), inset 4px 0 0 0 #ffc220',
        },
        standardSuccess: {
            boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), inset 4px 0 0 0 #54a546',
        },
        icon: {
            alignItems: 'center'
        },
        message: {
            fontSize: '16px',
        },
        ...props.styles
    }));

    const { severity, children, title } = props;
    const alertClasses = alertStyles();

    return (
        <MuiAlert
            classes={alertClasses}
            iconMapping={getIconMapping(severity)}
            {...props}
        >
            {title && (
                <AlertTitle>{title}</AlertTitle>
            )}
            {children}
        </MuiAlert>
    );
}

Alert.propTypes = {
    severity: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.node,
    styles: PropTypes.object
};
