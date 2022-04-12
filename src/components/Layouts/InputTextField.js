import React from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.error.main,
  },
}));

const InputTextField = ({
  field,
  val,
  onChange,
  onBlurChange,
  listing,
  otherIpProps,
  ipProps,
  rows,
  multiline,
  inputLen,
  options,
  select,
  ...props
}) => {
  const classes = useStyles();

  return (
    <TextField
      fullWidth
      label={listing[field].label}
      id={listing[field].label}
      variant="outlined"
      name={field}
      rows={rows ? rows : 1}
      value={val}
      size="medium"
      multiline={multiline ? multiline : false}
      onChange={(e) => (select ? onChange(e) : onChange(field, e.target.value))}
      onBlur={(e) => onBlurChange && onBlurChange(field, e.target.value)}
      error={listing[field] && listing[field].error}
      helperText={listing && listing[field].errorText}
      InputProps={ipProps}
      inputProps={otherIpProps}
      className={classes.root}
      required
      select={select ? select : false}
      {...props}
    >
      {options &&
        options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
    </TextField>
  );
};

export default InputTextField;
