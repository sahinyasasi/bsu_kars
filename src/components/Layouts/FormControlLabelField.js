import React from "react";
import {
  FormControlLabel,
  Typography,
  Checkbox,
  withStyles,
} from "@material-ui/core";

const GreenCheckbox = withStyles({
  root: {
    "&$checked": {
      color: "#169f36",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
const FormControlLabelField = ({
  label,
  checkedVal,
  onFeatureChange,
  name,
}) => (
  <FormControlLabel
    control={
      <GreenCheckbox
        checked={checkedVal}
        onChange={(e) =>
          onFeatureChange(e.target.name, label, e.target.checked)
        }
        name={name}
        size="small"
      />
    }
    label={<Typography variant="overline">{label}</Typography>}
  />
);
export default FormControlLabelField;
