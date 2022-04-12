import React from "react";
import { IconButton as MUIconButton } from "@mui/material";

const IconButton = ({ children, ...props }) => {
  return (
    <MUIconButton color="inherit" {...props}>
      {children}
    </MUIconButton>
  );
};
export default IconButton;
