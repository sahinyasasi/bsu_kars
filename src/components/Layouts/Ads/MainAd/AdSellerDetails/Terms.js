import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Link from "../../../Link";
const useStyles = makeStyles((theme) => ({
  policyLink: {
    color: "#169f36",
  },
}));

const Terms = () => {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textPrimary">
      {"Please read our "}
      <Link
        className={classes.policyLink}
        underline="always"
        to="https://privacyterms.io/view/GArzc2Ce-YdKfcFOz-NMp9DV/"
        target="_blank"
      >
        Terms and Conditions
      </Link>
      {" and "}  
      <Link
        className={classes.policyLink}
        underline="always"
        to="https://privacyterms.io/view/47Vl9mVW-OcHDu94E-5mJwrt/"
        target="_blank"
      >
        Privacy Policy
      </Link>
    </Typography>
  );
};
export default Terms;
