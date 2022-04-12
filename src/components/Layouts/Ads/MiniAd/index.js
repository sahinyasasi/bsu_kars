import React from "react";

import {
  Card,
  CardActions,
  CardMedia,
  Typography,
  Divider,
  Grid,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconButton from "../../IconButton";
import Button from "../../Button";
import Link from "../../Link";
import Label from "../../Label";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    height: "30vh",
    margin: "2%",
  },
  cardContent: {
    flexGrow: 1,
    padding: 0,
    paddingLeft: "5%",
    marginBottom: 5,
  },
  priceButton: {
    float: "left",
    fontSize: "15px",
    backgroundColor: "#169f36",
    "&:hover": {
      backgroundColor: "#006ba1",
    },
  },
  yrMilFt: {
    marginTop: "10px",
  },
  location: {
    marginTop: "10px",
    paddingRight: "20px",
  },
  locationIcon: {
    padding: "0px",
    marginBottom: "7px",
    color: "#169f36",
  },
  cardName: {
    margin: 0,
    paddingBottom: 0,
  },
  cardAttr: {
    paddingLeft: 12,
    paddingTop: 0,
  },
  days_posted: {
    marginTop: 4,
  },
  post_id: {
    padding: 0,
  },
}));

const MiniAd = ({ ad }) => {
  const classes = useStyles();
  let adName = `${ad.brand} ${ad.model} ${ad.variant}`.toUpperCase();

  return (
    <Card className={classes.card}>
      <Link href={`/active/listing/${ad.id}`} component="a">
        <CardMedia className={classes.cardMedia} image={ad.display_image_url} />
      </Link>

      <Divider />
      <CardActions>
        <Button
          className={classes.priceButton}
          label={
            "₹" + ad.asking_price.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") + " /-"
          }
        />

        {ad.price_modified && ad.previous_price !== ad.asking_price && (
          <Typography variant="body2" component="h5">
            {" "}
            <s>
              {"₹" +
                ad.previous_price.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") +
                " /-"}
            </s>
          </Typography>
        )}
      </CardActions>
      <CardActions className={classes.cardName}>
        <Link
          underline="always"
          href={`/active/listing/${ad.id}`}
          component="a"
        >
          <Typography variant="body2" display="block" gutterBottom>
            {adName.length > 23 ? adName.slice(0, 23) + ".." : adName}
          </Typography>
        </Link>
      </CardActions>
      <CardActions className={classes.cardAttr}>
        <Grid container spacing={1}>
          <Grid item xs={8} sm={8}>
            <Typography variant="caption" gutterBottom>
              <b>
                {ad.year +
                  " yr | " +
                  ad.km_driven.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") +
                  " km | " +
                  ad.fuel_type}
              </b>
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Label color="success">{"ID: " + ad.id}</Label>
          </Grid>
        </Grid>
      </CardActions>
      <Divider />
      <CardActions>
        <Grid container spacing={1}>
          <Grid item xs={8} sm={8}>
            <Typography variant="body2" gutterBottom>
              <IconButton
                aria-label="location"
                className={classes.locationIcon}
              >
                <LocationOnIcon fontSize="inherit" />
              </IconButton>
              {ad.location.city}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} className={classes.days_posted}>
            <Typography variant="caption" gutterBottom>
              {ad.days_posted}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default MiniAd;
