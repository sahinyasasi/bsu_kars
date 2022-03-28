import React from "react";

import { FormGroup } from "@material-ui/core";

const FormGroupField = ({ children, row, ...props }) => {
  return (
    <FormGroup row={row ? row : false} {...props}>
      {children}
    </FormGroup>
  );
};

export default FormGroupField;
