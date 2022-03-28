import React from "react";
import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import Button from "../../../Button";
const useStyles = makeStyles((theme) => ({
  titlePrice: {
    paddingLeft: theme.spacing(1),
  },
  priceButton: {
    backgroundColor: "#169f36",
    "&:hover": {
      backgroundColor: "#006ba1",
    },
  },
}));

const TitlePrice = ({ details }) => {
  console.log(details);
  const classes = useStyles();
  let adName =
    `${details.brand} ${details.model} ${details.variant}`.toUpperCase();
  return (
    <Box display="flex" className={classes.titlePrice} m={1}>
      <Grid container direction="row" spacing={2}>
        <Grid item lg={6} md={6} xs={12}>
          <Typography variant="h6">{adName}</Typography>
        </Grid>
        <Grid item lg={3} md={3} xs={6}>
          {details.price_modified &&
            details.previous_price !== details.asking_price && (
              <Typography variant="subtitle1">
                <s>
                  {"₹ " +
                    details.previous_price.replace(
                      /(\d)(?=(\d\d)+\d$)/g,
                      "$1,"
                    ) +
                    " /-"}
                </s>
              </Typography>
            )}
        </Grid>
        <Grid item lg={3} md={3} xs={6}>
          <Button
            className={classes.priceButton}
            size="medium"
            label={
              <Typography variant="subtitle1">
                {"₹ " +
                  details.asking_price.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") +
                  " /-"}
              </Typography>
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default TitlePrice;
