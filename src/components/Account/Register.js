import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Box,
  styled,
} from "@mui/material";
import { Alert } from "@material-ui/lab";
import CloseIcon from "@mui/icons-material/Close";
import InputTextField from "../Layouts/InputTextField";
import Password from "../Layouts/Password";
import Button from "../Layouts/Button";
import { apiService } from "../../services/apiService";
import { adUtilsService } from "../../services/adUtilsService";
import { validationService } from "../../services/validationService";
import { alertActions } from "../../actions";

const mandatoryText = "field cannot be empty";
const getUserRoles = [
  { value: "user", name: "User" },
  { value: "admin", name: "Admin" },
  { value: "super_admin", name: "Super Admin" },
];
const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.orange.main,
  },
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const Register = ({ open, handleClick }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  const [registerDetails, setRegisterDetails] = useState(
    adUtilsService.getInitialRegisterDetails()
  );
  // const [submitErr, setSubmitErr] = useState({
  //   status: true,
  //   stage: null,
  // });
  // const [submitRegError, setSubmitRegError] = useState({
  //   err: null,
  //   errMsg: null,
  // });
  const user = useSelector((state) => state.currentUser.user);

  const handleOnChange = (key, data) => {
    let userDetailsObj = "";
    if (data) {
      userDetailsObj = adUtilsService.updateRegValObjWithVal(key, data);
    } else {
      userDetailsObj = adUtilsService.updateRegValObjWithError(
        key,
        `${registerDetails[key].label} ${mandatoryText}!`
      );
    }

    setRegisterDetails({
      ...registerDetails,
      [key]: userDetailsObj,
    });
  };
  const handleOnBlurChange = (key, data) => {
    let userDetailsObj = "";
    if (data) {
      if (key == "name") {
        // /^([a-zA-Z0-9 _-]+)$/;
        const namePattern = /^[a-zA-Z][a-zA-Z ]*$/; // alphabets with spaces
        if (namePattern.test(data)) {
          userDetailsObj = adUtilsService.updateRegValObjWithVal(key, data);
        } else {
          userDetailsObj = adUtilsService.storeRegValObjWithError(
            key,
            data,
            `Please check ${registerDetails[key].label} Format - only Alphabets`
          );
        }
      } else if (key == "login_id") {
        const loginIdPattern = /^([a-zA-Z0-9_-]){4,15}$/;
        //  /^([a-z0-9_-]+)$/; /^([a-zA-Z0-9$_-]){8,20}$/;
        if (loginIdPattern.test(data)) {
          userDetailsObj = adUtilsService.updateRegValObjWithVal(key, data);
        } else {
          userDetailsObj = adUtilsService.storeRegValObjWithError(
            key,
            data,
            `Please check ${registerDetails[key].label} Allows only a-zA-Z0-9_-`
          );
        }
      } else if (key == "phone") {
        const phonePattern =
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (phonePattern.test(data)) {
          userDetailsObj = adUtilsService.updateRegValObjWithVal(key, data);
        } else {
          userDetailsObj = adUtilsService.storeRegValObjWithError(
            key,
            data,
            `Please check ${registerDetails[key].label} allows only numbers`
          );
        }
      } else if (key == "email") {
        const emailPattern =
          /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/;
        if (emailPattern.test(data)) {
          userDetailsObj = adUtilsService.updateRegValObjWithVal(key, data);
        } else {
          userDetailsObj = adUtilsService.storeRegValObjWithError(
            key,
            data,
            `Please check ${registerDetails[key].label} Format`
          );
        }
      } else if (key == "password") {
        // const pwdPattern = /^([A-Za-z])(?=.*d)[A-Za-zd]{8,}/; // Minimum eight characters, at least one letter and one number:
        const pwdPattern = /^([a-zA-Z0-9@$_-]){8,20}$/;
        if (pwdPattern.test(data)) {
          userDetailsObj = adUtilsService.updateRegValObjWithVal(key, data);
        } else {
          userDetailsObj = adUtilsService.storeRegValObjWithError(
            key,
            data,
            `${registerDetails[key].label} - Min 8 chars, Allows only a-zA-Z0-9@$_-`
          );
        }
      } else {
        userDetailsObj = adUtilsService.updateRegValObjWithVal(key, data);
      }
    } else {
      userDetailsObj = adUtilsService.updateRegValObjWithError(
        key,
        `${registerDetails[key].label} ${mandatoryText}!`
      );
    }

    setRegisterDetails({
      ...registerDetails,
      [key]: userDetailsObj,
    });
  };
  const submitRegister = async (userDetails) => {
    console.log(userDetails);
    try {
      const response = await apiService.registerUser(userDetails);

      handleClick();
      //setSubmitErr({ ...submitErr, status: false, stage: "submit_success" });
    } catch (err) {
      dispatch(
        alertActions.error(
          "There was some Error Registering the User, Please Try again Later."
        )
      );
      // var errorMsg =
      //   "There was some Error Registering the User, Please Try again Later.";
      // if (err.status == 422) {
      //   errorMsg = err.error;
      // }
      // setSubmitErr({ ...submitErr, status: true, stage: "submit_failure" });
      // setSubmitRegError({
      //   ...submitRegError,
      //   err: err,
      //   errMsg: errorMsg,
      // });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let validationResult =
      validationService.validateRegisterUserDetails(registerDetails);
    if (validationResult.isValid) {
      let userObj = {};

      Object.entries(validationResult.finalRegValsObj).map(([k, v]) => {
        userObj[k] = v.value;
      });
      submitRegister({ user: userObj });
    } else {
      setRegisterDetails(validationResult.finalRegValsObj);

      dispatch(alertActions.error("Please check all the fields!!"));
    }
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClick}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClick}
        >
          Register a new user
        </BootstrapDialogTitle>
        {user && user.role == "user" && (
          <Box m={2}>
            <Alert severity="error">
              <div>
                <b> Error: </b> you are not authorized to register a new user!
              </div>
            </Alert>
          </Box>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <DialogContent dividers>
            <InputTextField
              field="role"
              val={registerDetails.role.value}
              listing={registerDetails}
              disabled={user.role != "super admin" ? true : false}
              otherIpProps={{ maxLength: 30 }}
              onChange={handleOnChange}
              onBlurChange={handleOnBlurChange}
              size="small"
              margin="normal"
              options={getUserRoles}
              select
            />

            <InputTextField
              field="first_name"
              val={registerDetails.first_name.value}
              listing={registerDetails}
              otherIpProps={{ maxLength: 30 }}
              onChange={handleOnChange}
              onBlurChange={handleOnBlurChange}
              size="small"
              margin="normal"
            />
            <InputTextField
              field="last_name"
              val={registerDetails.last_name.value}
              listing={registerDetails}
              otherIpProps={{ maxLength: 30 }}
              onChange={handleOnChange}
              onBlurChange={handleOnBlurChange}
              size="small"
              margin="normal"
            />
            <InputTextField
              field="email"
              val={registerDetails.email.value}
              listing={registerDetails}
              otherIpProps={{ maxLength: 30 }}
              onChange={handleOnChange}
              onBlurChange={handleOnBlurChange}
              size="small"
              margin="normal"
            />
            <InputTextField
              field="phone"
              val={registerDetails.phone.value}
              listing={registerDetails}
              otherIpProps={{ maxLength: 30 }}
              onChange={handleOnChange}
              onBlurChange={handleOnBlurChange}
              size="small"
              margin="normal"
            />
            <InputTextField
              field="login_id"
              val={registerDetails.login_id.value}
              listing={registerDetails}
              otherIpProps={{ maxLength: 30 }}
              onChange={handleOnChange}
              onBlurChange={handleOnBlurChange}
              size="small"
              margin="normal"
            />
            <Password
              size="small"
              onChange={(e) => handleOnChange("password", e.target.value)}
              value={registerDetails.password.value}
              error={registerDetails.password.error}
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={
                user.role != "super admin" && user.role != "admin"
                  ? true
                  : false
              }
              label="Register A New User"
              style={{
                backgroundColor: "rgba(240, 56, 10, 0.8)",
                color: "white",
              }}
            />
          </DialogActions>
          {alert && alert.type === "error" && (
            <Box m={2}>
              <Alert severity="error">
                <div>
                  {" "}
                  <b> Error: </b>
                  {alert.message}
                </div>
              </Alert>
            </Box>
          )}
        </form>
      </BootstrapDialog>
    </div>
  );
};
export default Register;
