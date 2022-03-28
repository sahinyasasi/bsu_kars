import React from "react";
import { Box, Grid, Typography, makeStyles, Divider } from "@material-ui/core";
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

const FutureReference = ({ details, currentUser }) => {
  const classes = useStyles();
  return (
    <>
      {details.post_by === "slc" &&
        currentUser.user &&
        currentUser.user.role !== "user" && (
          <>
            <Divider />
            <Box className={classes.overview}>
              <VehicleDetailsTitle title="Future Reference Notes" />
            </Box>
            <Divider />
            <Box className={classes.details}>
              <Grid container spacing={2} className={classes.ykf}>
                <Grid item xs={12}>
                  <Typography variant="button">
                    {details.extra_notes}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </>
        )}
    </>
  );
};
export default FutureReference;
