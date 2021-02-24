import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import PropTypes from 'prop-types';

export default function ExpandableListItem({
                                               id, icon: Icon, text, children, classes = {},
                                           }) {
    const [open, setOpen] = React.useState(false);
    const onClick = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment>
            <ListItem id={id} button onClick={onClick}>
                <ListItemIcon>
                    <Icon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={text} classes={{ primary: classes.text }} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} unmountOnExit>
                {children}
            </Collapse>
        </React.Fragment>
    );
}

ExpandableListItem.propTypes = {
    id: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.node,
    classes: PropTypes.object,
};
