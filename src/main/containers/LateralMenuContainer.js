import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LateralMenuPresenter from '../presenters/LateralMenuPresenter';
import { isNavigationMenuOpen } from '../reducer';
import { menuClose } from '../actions';
import { logOut } from '../../users/actions';

export default withRouter(connect(state => ({
    menuOpened: isNavigationMenuOpen(state),
}), dispatch => ({
    onMenuClose: () => dispatch(menuClose()),
    onSessionClose: () => dispatch(logOut()),
}))(LateralMenuPresenter));
