import React, { useState } from "react";

import PropTypes from "prop-types";
import {
  Box,
  CardContent,
  Divider,
  Paper,
  makeStyles,
} from "@material-ui/core";
import AdCorousel from "../AdCorousel";
import AdCorouselBackDrop from "../AdCorouselBackDrop";
import Card from "../../../Card";
import ListVehicleDetails from "./ListVehicleDetails";
import ListVehicleFeatures from "./ListVehicleFeatures";
import TitlePrice from "./TitlePrice";
import FutureReference from "./FutureReference";

const useStyles = makeStyles((theme) => ({
  root: { border: "2px" },
  boxDetails: { borderColor: "grey.500", padding: theme.spacing(3) },
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
  productImage: {
    marginRight: theme.spacing(1),
    height: 48,
    width: 48,
  },
}));

const AdDetails = ({ details, currentUser }) => {
  const classes = useStyles();
  const [openAdCorouselBackDrop, setOpenAdCorouselBackDrop] = useState(false);
  const onHandleCloseReq = (data) => {
    setOpenAdCorouselBackDrop(data);
  };

  return (
    <Card className={classes.root} variant="outlined">
      {details && (
        <CardContent>
          <Paper variant="outlined">
            <TitlePrice details={details} />
            <Divider />
            <Box className={classes.overview}>
              <AdCorousel
                imagesList={details.images}
                onHandleClose={onHandleCloseReq}
              />
            </Box>
            <Divider />
            <ListVehicleDetails details={details} />
            <ListVehicleFeatures details={details} />
            <FutureReference details={details} currentUser={currentUser} />
          </Paper>
          {openAdCorouselBackDrop && (
            <AdCorouselBackDrop
              images={details.images.map((imageInfo, index) => imageInfo.url)}
              onHandleClose={onHandleCloseReq}
            />
          )}
        </CardContent>
      )}
    </Card>
  );
};

AdDetails.propTypes = {
  className: PropTypes.string,
};

export default AdDetails;
