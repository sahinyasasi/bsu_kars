import axios from "../utils/axios";
import { authHeader } from "../utils/authHeader";
export const apiService = {
  loginUser,
  registerUser,
  logout,
};

function loginUser(loginDetails) {
  return axios.post(`/apps/1006/users/sign_in`, loginDetails, {
    headers: { "Content-Type": "application/json" },
  });
}
function registerUser(loginDetails) {
  return axios.post(`/apps/1006/users`, loginDetails, {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  });
}

function logout() {
  localStorage.removeItem("bsukars_user");
  // console.log("(user after logout )========================== user", localStorage.getItem("bsukars_user"));
}
