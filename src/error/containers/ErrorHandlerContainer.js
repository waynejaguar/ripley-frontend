import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRedirectToHome } from '../../users/reducer';
import { logOut } from '../../users/actions';
import ErrorHandlerPresenter from '../presenters/ErrorHandlerPresenter';

export default withRouter(connect(state => ({
    redirectToLogin: !getRedirectToHome(state),
}), dispatch => ({
    onSessionExpires: () => dispatch(logOut()),
}))(ErrorHandlerPresenter));
