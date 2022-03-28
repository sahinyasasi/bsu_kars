import React from "react";

import { Autocomplete } from "@material-ui/lab";
import InputTextField from "./InputTextField";
const AutoCompleteField = ({
  options,
  onFieldChange,
  onBlurChange,
  customizedText,
  val,
  field,
  autoFocus,
  listing,
  ...props
}) => {
  return (
    <Autocomplete
      id={listing[field].label}
      value={val}
      onChange={(event, data) => {
        if (data) {
          onFieldChange(field, data);
        }
      }}
      options={val ? options : options}
      noOptionsText={customizedText}
      getOptionLabel={(option) => option}
      getOptionSelected={(option, value) => {
        if (value === "") {
          return true;
        } else if (option === value) {
          return true;
        }
      }}
      renderInput={(params) => (
        <InputTextField
          listing={listing}
          field={field}
          {...params}
          onBlurChange={onBlurChange}
        />
      )}
      {...props}
    />
  );
};
export default AutoCompleteField;
