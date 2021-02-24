import React from 'react';
import { Link, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import StandardDialog from '../StandardDialog/StandardDialog';

const useStyles = makeStyles(theme => ({
    link: {
        [theme.breakpoints.down('md')]: {
            fontSize: 16,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 18,
        },
        '&:hover': {
            cursor: 'pointer',
        },
    }
}));

export default function LinkedDialog({ linkText, title, children, ...otherProps }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <Link variant="body1" underline="always" onClick={toggle} classes={{ root: classes.link }}>
                {linkText}
            </Link>
            <StandardDialog open={open} title={title} onClose={toggle} {...otherProps}>
                {children}
            </StandardDialog>
        </>
    );
}

LinkedDialog.propTypes = {
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
