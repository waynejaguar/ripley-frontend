import React from 'react';
import {makeStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import {colors} from '../appearance/theme';
import TextField from '../components/Inputs/TextField';

const useStyles = makeStyles(() => ({
    label: {
        fontSize: 16,
    },
    extraLabel: {
        color: colors.gray2,
    },
    errorLabel: {
        color: colors.wmtError,
        fontSize: 16,
    },
    validation: {
        fontSize: 14,
        color: colors.lightGray3,
    },
    textError: {
        fontSize: 14,
        color: colors.wmtError,
    },
}));

export default function RegularTextField({
                                             id,
                                             label = '',
                                             name,
                                             onChange,
                                             onBlur,
                                             error,
                                             helperText,
                                             value,
                                             InputProps,
                                             isRequired,
                                             extraLabel,
                                             disabled,
                                             ariaLabel,
                                             ...props
                                         }) {
    const classes = useStyles(false);
    return (
        <div>
            <span name={`${id}Label`} className={error ? classes.errorLabel : classes.label}>{label}</span>
            <span name={`${id}HelperLabel`} className={classes.extraLabel}>
                {isRequired ? ' '+extraLabel : ''}
            </span>
            <TextField id={id} name={name} error={error} onChange={onChange} onBlur={onBlur} value={value}
                       disabled={disabled} InputProps={InputProps} ariaLabel={ariaLabel} {...props}
            />
            <span name={`${id}Error`} id={id} className={error ? classes.textError : classes.validation}>{helperText}</span>
        </div>
    );
}

RegularTextField.defaultProps = {
    value: '',
    onChange: ()=>{},
    isRequired: false,
};

RegularTextField.propTypes = {
    value: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    InputProps: PropTypes.object,
    isRequired: PropTypes.bool,
    extraLabel: PropTypes.string,
    disabled: PropTypes.bool,
    ariaLabel: PropTypes.string
};
