import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Button from "../../Button";
import AdDetails from "./AdDetails/index";
import AdSellerDetails from "./AdSellerDetails/index";
import { apiService } from "../../../../services/apiService";
import { UserContext } from "../../../../contexts/userContext";

const useStyles = makeStyles((theme) => ({
  root: { marginTop: 70 },
  details: { marginTop: 10 },
  backButton: {
    backgroundColor: "#169f36",
    "&:hover": {
      backgroundColor: "#006ba1",
    },
  },
}));

const MainAd = () => {
  const classes = useStyles();
  let history = useHistory();
  const [ad, setAd] = useState(null);
  const { user } = useContext(UserContext);
  const goToPreviousPath = () => {
    history.goBack();
  };
  const { ref_id, id } = useParams();
  console.log(ref_id, id);
  const getAd = async () => {
    if (id) {
      try {
        const response = await apiService.getAdById(id);
        setAd(response.data);
      } catch (err) {
        console.error("main ad error, id:", id, "error:", err);
      }
    }

    if (ref_id) {
      try {
        const response = await apiService.getActiveAdById(ref_id);
        setAd(response.data);
      } catch (err) {
        console.error("main ad error, ad_id:", ref_id, "error:", err);
      }
    }
  };

  useEffect(() => {
    getAd();
  }, []);

  return (
    <Container className={classes.root} maxWidth="lg">
      <Button
        className={classes.backButton}
        onClick={goToPreviousPath}
        label="Back"
      />

      <Grid container spacing={1} className={classes.details}>
        <Grid item lg={9} md={9} xs={12}>
          {ad && <AdDetails details={ad} currentUser={user} />}
        </Grid>
        <Grid item lg={3} md={3} xs={12}>
          {ad && (
            <AdSellerDetails
              postId={ad.id}
              seller_name={ad.seller_name}
              seller_phone={ad.seller_phone}
              seller_email={ad.seller_email}
              location={ad.location}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainAd;
