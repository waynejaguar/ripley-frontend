import React from 'react';
import { TextField as MuiTextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../../appearance/theme';

const useStyles = makeStyles({
    root: {
        marginTop: '9px',
        '& .MuiOutlinedInput-root': {
            '&.Mui-error fieldset': {
                borderRadius: '4px',
                border: 'solid 1px',
                borderColor: colors.wmtError,
            },
            '&.Mui-focused fieldset': {
                borderColor: colors.white,
                borderWidth: '1px',
                borderTopColor: colors.gray,
                borderLeftColor: colors.gray,
                borderRightColor: colors.gray,
                borderBottomWidth: '3px',
                borderBottomColor: colors.wmtBlue2,
            },
            "&.Mui-disabled fieldset": {
                backgroundColor: '#f3f3f3',
                borderStyle: 'none',
            }
        },
        '& .MuiInputBase-input': {
            '&.Mui-disabled':{
                color: '#757575',
                zIndex: 1
            }
        },
        '& .MuiAutocomplete-endAdornment': {
            zIndex: 2
        },
        '& .MuiIconButton-root': {
            '&.Mui-disabled':{
                color: '#757575'
            }
        }
    },
});

export default function TextField({ id, name, label, type, onChange, error, onBlur, value, ariaLabel, ...props }) {
    const classes = useStyles() ;
    return (
        <MuiTextField
            onBlur={onBlur}
            id={id}
            name={name}
            label={label}
            classes={{ root: classes.root }}
            type={type}
            value={value}
            margin="normal"
            fullWidth
            variant="outlined"
            onChange={onChange}
            error={error}
            aria-label={ariaLabel}
            {...props}
            data-testid={id}
        />
    );
}

TextField.propTypes = {
    value: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.bool,
    onBlur: PropTypes.func,
    ariaLabel: PropTypes.string,
};
