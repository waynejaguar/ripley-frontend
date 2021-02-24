import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginPagePresenter from '../presenters/LoginPagePresenter';
import { getLoginLoading, getLoginError, getRedirectToHome } from '../reducer';
import { clearErrors, loginRequest } from '../actions';

export default withRouter(connect(state => ({
    error: getLoginError(state),
    loading: getLoginLoading(state),
    redirectToHome: getRedirectToHome(state),
}), dispatch => ({
    onSubmitButtonClicked: payload => dispatch(loginRequest(payload)),
    onInputChange: () => dispatch(clearErrors()),
}))(LoginPagePresenter));
