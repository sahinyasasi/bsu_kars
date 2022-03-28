import React from "react";
import { Toolbar as MUToolBar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbarTitle: {
    flexGrow: 1,
  },
}));
const ToolBar = ({ title, children, ...props }) => {
  const classes = useStyles();
  return <MUToolBar {...props}>{children}</MUToolBar>;
};
export default ToolBar;
