import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, useTheme } from "@mui/styles";
import { styled } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Box,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Alert } from "@material-ui/lab";
import InputTextField from "../Layouts/InputTextField";
import Password from "../Layouts/Password";
import Button from "../Layouts/Button";
import { adUtilsService } from "../../services/adUtilsService";
import { validationService } from "../../services/validationService";
import { apiService } from "../../services/apiService";
import { userActions } from "../../actions";

const mandatoryText = "field cannot be empty";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.white.main,
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

const Login = ({ open, handleClick }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  const [loginDetails, setLoginDetails] = useState(
    adUtilsService.getInitialLoginDetails()
  );
  const [backDropOpen, setBackDropOpen] = useState(false);

  const handleOnChange = (key, data) => {
    let loginDetailsObj = "";
    if (data) {
      loginDetailsObj = adUtilsService.updateLoginValObjWithVal(key, data);
    } else {
      loginDetailsObj = adUtilsService.updateLoginValObjWithError(
        key,
        `${loginDetails[key].label} ${mandatoryText}!`
      );
    }

    setLoginDetails({
      ...loginDetails,
      [key]: loginDetailsObj,
    });
  };

  const submitLogin = async (loginDetails) => {
    console.log(loginDetails);
    try {
      const response = await apiService.loginUser(loginDetails);

      setBackDropOpen(false);
      handleClick();

      setTimeout(() => {
        console.log("success");
        dispatch(userActions.loginSuccess(response.data, "/listings"));
      }, 1500); // 2 seconds
    } catch (err) {
      setBackDropOpen(false);
      dispatch(userActions.loginFailure(err, "Incorrect Login Details."));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBackDropOpen(true);
    let validationResult =
      validationService.validateLoginUserDetails(loginDetails);
    if (validationResult.isValid) {
      let loginObj = {};
      const pattern =
        /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/;

      const result = pattern.test(loginDetails.loginId.value);
      if (result === true) {
        submitLogin({
          ...loginObj,
          email: loginDetails.loginId.value,
          password: loginDetails.password.value,
        });
      } else {
        submitLogin({
          ...loginObj,
          login_id: loginDetails.loginId.value,
          password: loginDetails.password.value,
        });
      }
    } else {
      setLoginDetails(validationResult.loginErrorVals);
      setBackDropOpen(false);
      dispatch(
        userActions.loginFailure(
          validationResult.loginErrorVals,
          "Please check the Login Details!"
        )
      );
    }
  };
  // React.useEffect(() => {
  //   if (open) {
  //     document.body.style.overflow = "unset";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [open]);

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
          Login
        </BootstrapDialogTitle>
        <Backdrop className={classes.backdrop} open={backDropOpen}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <form onSubmit={handleSubmit} noValidate>
          <DialogContent dividers>
            <InputTextField
              field="loginId"
              val={loginDetails.loginId.value}
              listing={loginDetails}
              otherIpProps={{ maxLength: 30 }}
              onChange={handleOnChange}
              onBlurChange={handleOnChange}
              size="small"
              margin="normal"
            />

            <Password
              size="small"
              onChange={(e) => handleOnChange("password", e.target.value)}
              value={loginDetails.password.value}
              error={loginDetails.password.error}
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              label="Login"
              style={{ backgroundColor: "rgba(240, 56, 10, 0.8)" }}
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
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
export default Login;
