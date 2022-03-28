import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as MULink } from "@mui/material";

const Link = ({ to, variant, children, ...props }) => {
  return (
    <MULink
      variant={variant ? variant : "body2"}
      color="textPrimary"
      component={RouterLink}
      underline="hover"
      to={to}
      {...props}
    >
      {children}
    </MULink>
  );
};
export default Link;
