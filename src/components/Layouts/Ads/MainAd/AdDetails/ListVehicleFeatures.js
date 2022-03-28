import React from "react";
import { Box, Grid, Typography, makeStyles, Divider } from "@material-ui/core";
import { CheckCircle as CheckCircleIcon } from "react-feather";
import VehicleDetailsTitle from "./VehicleDetailsTitle";
const useStyles = makeStyles((theme) => ({
  details: {
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  overview: {
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      alignItems: "flex-start",
    },
  },

  ykf: {
    padding: "1%",
  },
}));

const ListVehicleFeatures = ({ details }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.overview}>
        <VehicleDetailsTitle title="Vehicle Features" />
      </Box>
      <Divider />
      <Box className={classes.details}>
        <Grid container spacing={2} className={classes.ykf}>
          {Object.keys(details.features).map((feature) => (
            <Grid item lg={4} md={6} xs={12} key={feature}>
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <CheckCircleIcon color="green" size={25} />
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    display="inline"
                    style={{ marginLeft: "5px" }}
                  >
                    {details.features[feature].label}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default ListVehicleFeatures;
