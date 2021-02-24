import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../appearance/theme';

const useStyles = makeStyles(() => ({
    dialogTitle: {
        padding: '16px 16px 16px 40px'
    },
    dialogContent: {
        padding: '0 40px'
    },
    dialogActions: {
        padding: '16px 40px 32px 40px'
    },
    title: {
        paddingTop: '35px',
        fontSize: '24px',
        color: colors.wmtBlue2
    },
    closeButton: {
        position: 'absolute',
        right: '4px',
        top: '4px',
        color: colors.gray3,
    }
}));

export default function StandardDialog(props) {
    const classes = useStyles();
    const {title, actions, children, onClose, ...otherProps} = props;
    return (
        <Dialog onClose={onClose} {...otherProps}>
            <DialogTitle disableTypography className={classes.dialogTitle}>
                <Typography variant="h6" component="h2" className={classes.title}>{title}</Typography>
                <IconButton aria-label="cerrar" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon fontSize="large"/>
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                {children}
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                {actions}
            </DialogActions>
        </Dialog>
    );
}

StandardDialog.propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func,
    children: PropTypes.node,
    actions: PropTypes.node,

};