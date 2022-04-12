import { userConstants } from "../constants/userConstants";
import { apiService } from "../services/apiService";
import { alertActions } from "./alertActions";
import { history } from "../utils/history";

export const userActions = {
  loginSuccess,
  loginFailure,
  logout,
  userLogout,
};

function loginSuccess(user, path) {
  return (dispatch) => {
    localStorage.setItem("bsukars_user", JSON.stringify(user));
    dispatch(success(user));
    dispatch(alertActions.success("Login Success!"));

    history.push(path);
  };

  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
}

function loginFailure(err, errMsg) {
  return (dispatch) => {
    dispatch(failure(err));
    dispatch(alertActions.error(errMsg));
  };

  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function userLogout(path) {
  return (dispatch) => {
    apiService.logout();
    dispatch(logout());
    console.log("user Logout success");
    history.push(path);
    // dispatch(alertActions.success("Logout successfull"));
  };
  function logout() {
    return { type: userConstants.LOGOUT };
  }
}

function logout() {
  apiService.logout();
  return { type: userConstants.LOGOUT };
}
