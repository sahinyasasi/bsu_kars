import React from "react";
import { Button as MUButton } from "@mui/material";

const Button = ({ label, size, variant, color, ...props }) => {
  return (
    <MUButton
      id="label"
      variant={variant ? variant : "contained"}
      size={size ? size : "small"}
      color={color ? color : "primary"}
      {...props}
    >
      {label}
    </MUButton>
  );
};
export default Button;
