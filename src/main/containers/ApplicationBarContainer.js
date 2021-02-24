import { connect } from 'react-redux';
import ApplicationBarPresenter from '../presenters/ApplicationBarPresenter';
import { menuOpen } from '../actions';
import { getRedirectToHome } from '../../users/reducer';

export default connect(state => ({
    showMenuButton: getRedirectToHome(state),
}), dispatch => ({
    onMenuOpen: () => dispatch(menuOpen()),
}))(ApplicationBarPresenter);