import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../../appearance/theme';
import RegularTextField from '../../components/RegularTextField';

const useStyles = makeStyles({
    root: {
        marginTop: '9px',
        '& .MuiOutlinedInput-root': {
            '&.Mui-error fieldset': {
                borderRadius: '4px',
                border: 'solid 2px',
                borderColor: colors.ripleyError,
            },
            '&.Mui-focused fieldset': {
                borderColor: colors.white,
                borderWidth: '1px',
                borderTopColor: colors.gray,
                borderLeftColor: colors.gray,
                borderRightColor: colors.gray,
                borderBottomWidth: '3px',
                borderBottomColor: colors.ripleyBlue2,
            },
        },
    },
});

export default function LoginTextField({
                                           id, name, label, type, onChange, error, onBlur, inputProps, ...props
                                       }) {

    const classes = useStyles();

    const handleTextChange = (e) => {
        onChange(e);
    };

    return (
        <RegularTextField
            onBlur={onBlur}
            id={id}
            name={name}
            label={label}
            classes={{ root: classes.root }}
            type={type}
            margin="normal"
            fullWidth
            variant="outlined"
            onChange={handleTextChange}
            error={error}
            InputLabelProps={{
                style: {
                    fontWeight: 'normal',
                    fontFamily: 'BogleWeb',
                    color: colors.ripleyBlue,
                    fontSize: '18px',
                    marginTop: '3px',
                },
                shrink: false,
            }}
            InputProps={{
                inputProps,
            }}
            {...props}
        />
    );
}

LoginTextField.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.bool,
    onBlur: PropTypes.func,
    inputProps: PropTypes.any,
};
