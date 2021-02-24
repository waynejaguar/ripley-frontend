import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
import Alert from '../Alert/Alert';

export default function CollapsibleAlert(props) {
    const { open, ...otherProps} = props;
    return (
        <Collapse in={open} timeout={{
            enter: 500,
            exit: 1000
        }}>
            <Fade in={open} timeout={{
                enter: 1000,
                exit: 500
            }}>
                <Alert {...otherProps}/>
            </Fade>
        </Collapse>
    );
}

CollapsibleAlert.propTypes = {
    open: PropTypes.bool
};