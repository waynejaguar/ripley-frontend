import { combineReducers } from 'redux';
import main from './main/reducer';
import user from './users/reducer';

export default combineReducers({
    main,
    user
});
