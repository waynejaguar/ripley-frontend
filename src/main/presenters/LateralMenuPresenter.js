import React, { useEffect } from 'react';
import {
    CardMedia,
    Drawer,
    Hidden,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
} from '@material-ui/core';

import {
    DescriptionOutlined,
    PowerSettingsNewOutlined,
} from '@material-ui/icons';

import PropTypes from 'prop-types';

/*
import { avatar } from "../../../src/assets/icons/avatar.png";
*/
import { colors, menuWidth } from '../../appearance/theme';
import ExpandableListItem from '../../components/ExpandableListItem/ExpandableListItem';
import { logout } from '../../services/loginService';

// TODO: obtain these values from the logged user
const username = 'Usuario Interno';
const department = 'CHAS Walmart Chile';
const urlCloseSession = ['/apc/new','apc/edit/'];

const useStyles = makeStyles(theme => ({
    mobileDrawerPaper: {
        width: menuWidth,
    },
    desktopDrawerPaper: {
        top: theme.spacing(8),
        width: menuWidth,
        backgroundColor: colors.lightGray7,
    },
    profileCard: {
        backgroundColor: colors.wmtProfileCard,
        paddingTop: 20,
        minHeight: 170,
        border: 'none',
        borderRadius: 0,
    },
    profileCardAvatar: {
        width: 88,
        height: 88,
        margin: 'auto',
    },
    profileCardText: {
        color: colors.white,
        textAlign: 'center',
    },
    menuText: {
        fontWeight: 'bold',
        marginLeft: -10,
    },
    subMenuText: {
        marginLeft: 45,
        cursor: 'pointer',
    },
    mainMenu: {
        margin: '26px 11px 0 10px',
        paddingTop: 0,
    },
    iconColor: {
        color: colors.black,
    },
    root: {
        '&.selected': {
            backgroundColor: colors.lightGray7,
            color: colors.lightBlue2,
        }
    }
}));

export default function LateralMenuPresenter({
                                                 location,
                                                 history,
                                                 menuOpened,
                                                 onMenuClose,
                                                 onSessionClose,
                                             }) {
    const classes = useStyles();
    const onMenuClick = (menuLink) => () => {
        history.push(menuLink);
        onMenuClose();
    };

    const onSessionCloseClick = () => {
        const { pathname } = history.location;
        const isDirty = (localStorage.getItem('isDirty') === 'true');

        if( (!urlCloseSession.find(url => pathname.includes(url)))
            || (urlCloseSession.find(url => pathname.includes(url)) && !isDirty)
        ){
            onSessionClose();
        }

        history.replace('/login');
    };

    useEffect(()=>{
        if(history.location.pathname === '/login'){
            logout();
            onMenuClose();
        }
    },[history.location, onMenuClose]);

    const menuList = [
        { id: 'apc-list', path: '/apc/list', text: 'Acuerdos comerciales' },
        { id: 'new-apc', path: '/apc/new', text: 'Crear' }
    ];

    const profile = (
        <>
            <Paper id="profile-card" className={classes.profileCard}>
                <CardMedia
                    component="img"
                    alt="Avatar"
                    title="avatar"
                    classes={{ root: classes.profileCardAvatar }} />
                <Typography id="username" variant="subtitle1" className={classes.profileCardText}>
                    {username}
                </Typography>
                <Typography id="department" variant="subtitle2" className={classes.profileCardText}>
                    {department}
                </Typography>
            </Paper>
        </>
    );

    const menu = (
        <>
            <List id="main-menu" className={classes.mainMenu}>
                <ExpandableListItem id="menu-item-apc" icon={DescriptionOutlined} text="APC" classes={{ text: classes.menuText, icon: classes.iconColor }}>
                    <List component="div" disablePadding>
                        {menuList.map((menuItem) => (
                            <ListItem
                                key={menuItem.id}
                                id={`menu-item-${menuItem.id}`}
                                button
                                classes={{ root: classes.root, selected: 'selected' }}
                                onClick={onMenuClick(menuItem.path)}
                                selected={location.pathname.startsWith(menuItem.path)}
                            >
                                <ListItemText primary={menuItem.text} classes={{ primary: classes.subMenuText }} />
                            </ListItem>
                        ))}
                    </List>
                </ExpandableListItem>
                <ListItem id="menu-item-close-session" button onClick={onSessionCloseClick} >
                    <ListItemIcon>
                        <PowerSettingsNewOutlined className={classes.iconColor} />
                    </ListItemIcon>
                    <ListItemText primary="Cerrar Sesión" classes={{ primary: classes.menuText }} />
                </ListItem>
            </List>
        </>
    );

    const navbar = (
        <>
            {profile}
            {menu}
        </>
    );

    return (

        <>
            <Hidden lgUp implementation="css">
                <Drawer
                    id="mobile-drawer"
                    variant="temporary"
                    classes={{ paper: classes.mobileDrawerPaper }}
                    open={menuOpened}
                    onClose={onMenuClose}>
                    {navbar}
                </Drawer>
            </Hidden>
            <Hidden mdDown implementation="css">
                <Drawer
                    id="desktop-drawer"
                    variant="permanent"
                    classes={{ paper: classes.desktopDrawerPaper }} >
                    {navbar}
                </Drawer>
            </Hidden>
        </>
    );
}

LateralMenuPresenter.propTypes = {
    history: PropTypes.object.isRequired,
    menuOpened: PropTypes.bool.isRequired,
    onSessionClose: PropTypes.func.isRequired,
    onMenuClose: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
};
