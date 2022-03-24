import { alertActions } from "./alertActions";
import { UserService } from "../_services/user_service";
import { history } from "../_helpers/history";
import { userConstants } from "../_constants/userConstants";

export const userAction = {
    login,
    register
}

function login(values, navigate) {
    return dispatch => {
        dispatch(request({ values }))
        UserService.login(values).then(
            user => {
                dispatch(success(user))
                navigate(user)
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        )

    }
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}


function register(user,handleResponse) {
    return dispatch => {
        dispatch(request(user));
        UserService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    console.log('userAction--->',user)
                    handleResponse(user);
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    console.log('userAction--->',error)
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}