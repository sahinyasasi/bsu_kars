import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Label from "../../../Label";

const SellerDetails = ({ detail, value }) => (
  <Grid item xs={12} key={detail}>
    <Grid container direction="row" alignItems="center">
      <Grid item>
        <Label color="primary">
          <Typography display="inline" variant="caption">
            {detail}
          </Typography>
        </Label>
        <Typography
          variant="subtitle2"
          display="inline"
          style={{ marginLeft: "16px" }}
        >
          {value}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);
export default SellerDetails;
