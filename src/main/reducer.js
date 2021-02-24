import { combineReducers } from 'redux';
import { MENU_OPEN, MENU_CLOSE } from './actions';

function navigationMenuReducer(state = { open: false }, action) {
    switch (action.type) {
        case MENU_OPEN:
            return {
                ...state,
                open: true,
            };
        case MENU_CLOSE:
            return {
                ...state,
                open: false,
            };
        default:
            return state;
    }
}

export const isNavigationMenuOpen = state => state.main.navigationMenu.open;

export default combineReducers({
    navigationMenu: navigationMenuReducer,
});
