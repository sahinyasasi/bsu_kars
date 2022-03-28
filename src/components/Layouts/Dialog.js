import React from "react";

import { Dialog as MUDialog } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "./Button";

const Dialog = ({
  open,
  onClose,
  title,
  text,
  options,
  children,
  ...props
}) => {
  return (
    <div>
      <MUDialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        {...props}
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
          <div>{children}</div>
        </DialogContent>
        <DialogActions>
          {options &&
            options.map((option) => {
              return (
                <Button
                  label={option.title}
                  key={option.title}
                  onClick={() => {
                    option.onclick();
                  }}
                  variant="text"
                />
              );
            })}
        </DialogActions>
      </MUDialog>
    </div>
  );
};
export default Dialog;
