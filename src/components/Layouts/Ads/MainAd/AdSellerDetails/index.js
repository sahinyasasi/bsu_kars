import React, { useState, useEffect } from "react";

import {
  Box,
  CardContent,
  CardHeader,
  Divider,
  Paper,
  makeStyles,
  Grid,
} from "@material-ui/core";

import Label from "../../../Label";
import GoogleMap from "../../../GoogleMap";
import Link from "../../../Link";
import Card from "../../../Card";
import SellerDetails from "./SellerDetails";
import Terms from "./Terms";

const useStyles = makeStyles((theme) => ({
  root: { backgroundColor: "#153e4d", color: "white", marginTop: "5%" },
  details: { padding: theme.spacing(2) },
  viewHideSd: { marginLeft: "100px", color: "#169f36", marginBottom: "20px" },
  policyLink: {
    color: "#169f36",
  },
}));
const slc_loc_link = "https://goo.gl/maps/XP7bqEe9W4JJbffd7";

const AdSellerDetails = ({
  postId,
  seller_name,
  seller_email,
  seller_phone,
  location,
}) => {
  const classes = useStyles();
  const [showSellerDetails, setShowSellerDetails] = useState(false);
  const [sellerDetails, setSellerDetails] = useState({
    name: "",
    phone_number: "",
    email: "",
  });

  const hideSellerDetails = () => {
    seller_phone = seller_phone.replace(seller_phone.substring(5, 10), "*****");

    let hide = seller_email.split("@")[0].length - 2;
    var r = new RegExp(".{" + hide + "}@", "g");
    seller_email = seller_email.replace(r, "***@");

    setSellerDetails({
      ...sellerDetails,
      name: seller_name,
      email: seller_email,
      phone_number: seller_phone,
    });
    setShowSellerDetails(false);
  };

  const viewSellerDetails = () => {
    setSellerDetails({
      ...sellerDetails,
      name: seller_name,
      email: seller_email,
      phone_number: seller_phone,
    });
    setShowSellerDetails(true);
  };

  useEffect(() => {
    if (seller_name && seller_email && seller_phone) {
      hideSellerDetails();
    }
  }, []);

  return (
    <Card className={classes.root}>
      <CardHeader title="Contact Seller" />
      <Divider />
      <CardContent>
        <Paper variant="outlined">
          <Box className={classes.details}>
            <Grid container spacing={2}>
              <SellerDetails detail="name" value={sellerDetails.name} />
              <SellerDetails detail="email" value={sellerDetails.email} />
              <SellerDetails
                detail="phone"
                value={"+91 " + sellerDetails.phone_number}
              />

              {!showSellerDetails && (
                <Link
                  className={classes.viewHideSd}
                  component="button"
                  underline="always"
                  variant="body2"
                  onClick={() => {
                    viewSellerDetails();
                  }}
                >
                  View Contact Details..
                </Link>
              )}
              {showSellerDetails && (
                <Link
                  className={classes.viewHideSd}
                  component="button"
                  underline="always"
                  variant="body2"
                  onClick={() => {
                    hideSellerDetails();
                  }}
                >
                  Hide Contact Details..
                </Link>
              )}

              <SellerDetails
                detail="address"
                value={
                  <Link to={slc_loc_link} target="_blank" color="inherit">
                    Sri Laxmi Cars - NFC Main Rd, APHB Colony, Moula Ali,
                    Secunderabad, Telangana 500040, India
                  </Link>
                }
              />

              <Grid item xs={12} className={classes.location}>
                <GoogleMap />
              </Grid>
            </Grid>
          </Box>
        </Paper>
        <Box mt={2}>
          <Terms />
        </Box>
        <Divider />
        <Box mt={3} display="flex" justifyContent="flex-end">
          <Label color="success">{"Post Id: " + postId}</Label>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AdSellerDetails;
