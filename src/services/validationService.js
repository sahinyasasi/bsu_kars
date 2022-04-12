export const validationService = {
  validateLoginUserDetails,
  updateValObjWithError,
  validateRegisterUserDetails,
  checkEmailPattern,
};

const mandatoryText = "field cannot be empty";
const valObj = { value: "", error: false, errorText: "" };

function updateValObjWithError(errorText) {
  return {
    ...valObj,
    value: "",
    error: true,
    errorText: errorText,
  };
}

function validateLoginUserDetails(loginVals) {
  let isValid = true;
  let loginErrorVals = { ...loginVals };

  if (!(loginVals.loginId && loginVals.loginId.value)) {
    loginErrorVals = {
      ...loginErrorVals,
      loginId: updateValObjWithError(`LogIn ID ${mandatoryText}!`),
    };
    isValid = false;
  }

  if (!(loginVals.password && loginVals.password.value)) {
    loginErrorVals = {
      ...loginErrorVals,
      password: updateValObjWithError(`Password ${mandatoryText}!`),
    };
    isValid = false;
  }

  if (isValid) {
    return { isValid };
  } else {
    return { isValid, loginErrorVals };
  }
}

function checkEmailPattern(email) {
  const pattern =
    /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/;

  return pattern.test(email);
}
function validateRegisterUserDetails(registerVals) {
  let isValid = true;
  var finalRegValsObj = { ...registerVals };
  Object.keys(registerVals).map(function (key, index) {
    if (registerVals[key].error || !registerVals[key].value) {
      isValid = false;
      var errorTxt = `${registerVals[key].label} ${mandatoryText}`;
      if (registerVals[key].error) {
        errorTxt = registerVals[key].errorText;
      }

      var keyValObj = {
        ...finalRegValsObj[key],
        error: true,
        errorText: errorTxt,
      };

      finalRegValsObj = {
        ...finalRegValsObj,
        [key]: keyValObj,
      };
    }
  });

  if (isValid) {
    return { isValid, finalRegValsObj };
  } else {
    return { isValid, finalRegValsObj };
  }
}
