import React from "react";
import { Typography } from "@material-ui/core";
import Label from "../../../Label";

const VehicleDetailsTitle = ({ title }) => (
  <Label color="success">
    <Typography display="inline" variant="subtitle2">
      {title}
    </Typography>
  </Label>
);
export default VehicleDetailsTitle;
