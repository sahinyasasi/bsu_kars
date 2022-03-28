import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar as MUAppBar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "4%",
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#153e4d",
  },
}));

const AppBar = ({ children, title, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MUAppBar
        position="fixed"
        elevation={0}
        className={classes.appBar}
        {...props}
      >
        {children}
      </MUAppBar>
    </div>
  );
};
export default AppBar;
