import React from "react";

import { Alert as MUAlert } from "@material-ui/lab";

import Collapse from "@material-ui/core/Collapse";

const Alert = ({ type, msg, variant, ...props }) => {
  const [open] = React.useState(true);
  return (
    <Collapse in={open}>
      <MUAlert variant={variant} severity={type} {...props}>
        {msg}
      </MUAlert>
    </Collapse>
  );
};

export default Alert;
