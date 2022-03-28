import React from "react";
import { Typography, FormLabel } from "@material-ui/core";

const FormLabelField = ({ label, ...props }) => {
  return (
    <FormLabel component="legend" {...props}>
      {<Typography variant="button">{label}</Typography>}
    </FormLabel>
  );
};
export default FormLabelField;
