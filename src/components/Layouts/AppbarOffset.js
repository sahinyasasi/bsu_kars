import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  offset: {
    ...theme.mixins.toolbar,
  },
}));

export default function AppBarOffset() {
  const classes = useStyles();
  return <div className={classes.offset} />;
}
