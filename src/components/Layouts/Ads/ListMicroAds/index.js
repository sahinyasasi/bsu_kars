import React from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";

import MicroAd from "../MicroAd";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: 20,
    paddingRight: 0,
    paddingLeft: 0,
  },
}));
const ListMicroAds = ({ ads }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={4}>
        {ads.map((ad) => (
          <Grid item key={ad.id} xs={12} sm={6} md={4}>
            <MicroAd ad={ad} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default ListMicroAds;
