import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import VehicleDetail from "./VehicleDetail";

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

const ListVehicleDetails = ({ details }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.overview}>
        <VehicleDetailsTitle title="Vehicle Details" />
      </Box>
      <Divider />
      <Box className={classes.details}>
        <Grid container spacing={2} className={classes.ykf}>
          <VehicleDetail detail="brand" value={details.brand} />
          <VehicleDetail detail="model" value={details.model} />
          <VehicleDetail detail="variant" value={details.variant} />
          <VehicleDetail detail="year" value={details.year} />
          <VehicleDetail detail="fuel type" value={details.fuel_type} />
          <VehicleDetail detail="km driven" value={details.km_driven} />
          <VehicleDetail detail="body type" value={details.body_type} />
          <VehicleDetail detail="transmission" value={details.transmission} />
          <VehicleDetail detail="no of owners" value={details.no_of_owners} />
          <VehicleDetail detail="condition" value={details.condition} />
          <VehicleDetail
            detail="Date Posted"
            value={new Date(details.active_timestamp).toDateString()}
          />
          <VehicleDetail detail="Post Id" value={details.id} />
          <VehicleDetail
            detail="Location"
            len={12}
            value={details.location.city}
          />
        </Grid>
      </Box>
      <Divider />
      <Box className={classes.overview}>
        <VehicleDetailsTitle title="Vehicle Notes" />
      </Box>
      <Divider />
      <Box className={classes.details}>
        <Grid container spacing={2} className={classes.ykf}>
          <Grid item xs={12}>
            <Typography variant="button">{details.vehicle_notes}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </>
  );
};
export default ListVehicleDetails;
