import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

import { CardActions } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: "100%",

    maxWidth: 400,
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 0,
    width: "160px",
    paddingTop: "30%",
    border: "20px solid rgba(0,0,0, 0.3)",
    borderTop: "none",
    borderBottom: "none",
    borderRadius: "4px",
  },
  mediabody: {
    width: "240",
    paddingLeft: "20px",
  },
  content: {
    display: "flex",

    alignItems: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "3px",
    transform: "scale(0.8)",
  },
}));

const MicroAd = ({ ad }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <div className={classes.content}>
        <CardMedia
          className={classes.media}
          image={ad.display_image_url}
          title="Paella dish"
        />

        <div className={classes.mediabody}>
          <Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="body1">
                {ad.year}
                {bull} {ad.brand} {ad.model}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="h6">
            {"₹ " + ad.asking_price.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
          </Typography>
        </div>
      </div>
      <div>
        <CardActions>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Typography className={classes.cardName} color="textSecondary">
                {ad.km_driven} km
                {bull} {ad.fuel_type} {bull}
                {ad.no_of_owners} Owners
                {bull}
                {ad.location.city}
              </Typography>
            </Grid>
          </Grid>
        </CardActions>
      </div>
    </Card>
  );
};
export default MicroAd;
