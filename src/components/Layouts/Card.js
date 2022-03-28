import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card as MUCard } from "@material-ui/core";

const useStyles = makeStyles({});

const Card = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <MUCard className={classes.root} {...props}>
      {children}
    </MUCard>
  );
};
export default Card;
