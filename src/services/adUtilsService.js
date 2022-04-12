export const adUtilsService = {
  updateValObjWithValnLabel,
  getInitialLoginDetails,
  updateLoginValObjWithVal,
  updateLoginValObjWithError,
  getInitialRegisterDetails,
  updateRegValObjWithVal,
  updateRegValObjWithError,
  storeRegValObjWithError,
};

const valObj = { value: "", error: false, errorText: "", label: "" };
function updateValObjWithValnLabel(val, label) {
  return {
    ...valObj,
    label: label,
    value: val,
  };
}

function getInitialLoginDetails() {
  return {
    loginId: updateValObjWithLabel("Login Id"),
    password: updateValObjWithLabel("Password"),
  };
}

function updateLoginValObjWithVal(field, data) {
  let initialObj = getInitialLoginDetails();
  let initialValObj = initialObj[field];
  return {
    ...initialValObj,
    value: data,
  };
}

function updateLoginValObjWithError(field, errorText) {
  let initialObj = getInitialLoginDetails();
  let initialValObj = initialObj[field];

  return {
    ...initialValObj,
    // value: "",
    error: true,
    errorText: errorText,
  };
}

function updateValObjWithLabel(label) {
  return {
    ...valObj,
    label: label,
  };
}

function getInitialRegisterDetails() {
  return {
    first_name: {
      value: "",
      error: false,
      errorText: "Ex: Sharukh Khan, Alphabets only, a-z A-Z",
      label: "First Name",
    },
    last_name: {
      value: "",
      error: false,
      errorText: "Ex: Sharukh Khan, Alphabets only, a-z A-Z",
      label: "Last Name",
    },
    email: {
      value: "",
      error: false,
      errorText: "Ex: sharukh@sharukh.com",
      label: "Email",
    },
    login_id: {
      value: "",
      error: false,
      errorText: "Ex: srkKhan, Min 4 chars, Allows only a-zA-Z0-9_-",
      label: "Login Id",
    },
    password: {
      value: "",
      error: false,
      errorText: "Min 8 chars, Allows only a-zA-Z0-9$_-",
      label: "Password",
    },
    phone: {
      value: "",
      error: false,
      errorText: "Enter 10 digit phone number",
      label: "Phone",
    },
    role: {
      value: "user",
      error: false,
      errorText: "Pick the role for the user",
      label: "Role",
    },
  };
}
function updateRegValObjWithVal(field, data) {
  let initialObj = getInitialRegisterDetails();
  let initialValObj = initialObj[field];
  return {
    ...initialValObj,
    value: data,
  };
}
function updateRegValObjWithError(field, errorText) {
  let initialObj = getInitialRegisterDetails();
  let initialValObj = initialObj[field];

  return {
    ...initialValObj,
    // value: "",
    error: true,
    errorText: errorText,
  };
}

function storeRegValObjWithError(field, data, errorText) {
  let initialObj = getInitialRegisterDetails();
  let initialValObj = initialObj[field];

  return {
    ...initialValObj,
    value: data,
    error: true,
    errorText: errorText,
  };
}
