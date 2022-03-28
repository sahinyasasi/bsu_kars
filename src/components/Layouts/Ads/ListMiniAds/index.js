import React from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";

import MiniAd from "../MiniAd";
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
const ListMiniAds = ({ ads }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={4}>
        {ads.map((ad) => (
          <Grid item key={ad.id} xs={12} sm={6} md={4}>
            <MiniAd ad={ad} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default ListMiniAds;
