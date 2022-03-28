import React, { useState } from "react";
import {
  Container,
  Box,
  CardContent,
  Typography,
  CardHeader,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { apiService } from "../../services/apiService";
import { history } from "../../helpers/history";
import GoogleMap from "./GoogleMap";
import Card from "./Card";
import Alert from "./Alert";
import Form from "../Widgets/Form";
import { schema } from "../../schemas/contactUsSchema";
import { uiSchema } from "../../schemas/contactUsSchema";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(12),
  },
  map: {
    marginBottom: theme.spacing(4),
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  const [alertMsg, setAlertMsg] = useState({ msg: "", type: "" });
  const [formData, setFormData] = useState({});
  const transform = (form) => {
    const data = JSON.parse(JSON.stringify(form.formData));

    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };
  const onSubmit = async ({ formData }) => {
    try {
      const response = await apiService.postQueryMsg({ query: formData });
      history.push("/contact_us");
      setAlertMsg((prev) => ({
        ...prev,
        msg:
          "Your Message has been submitted successfully, your reference id is " +
          response.data.id,
        type: "success",
      }));

      setTimeout(() => {
        setAlertMsg((prev) => ({ msg: "", type: "" }));
      }, 5000);
    } catch (err) {
      setAlertMsg((prev) => ({
        ...prev,
        msg: "There was some error submitting your Message!",
        type: "error",
      }));
      setTimeout(() => {
        setAlertMsg((prev) => ({ msg: "", type: "" }));
      }, 5000);
    }
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box className={classes.overview}>
        <Grid container spacing={10}>
          <Grid item lg={6} md={12} xs={12}>
            <Typography variant="h6" gutterBottom>
              CONTACT US:
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Sri Laxmi Cars </b>
            </Typography>
            <Typography variant="body2" gutterBottom>
              <b>Address:</b> NFC Main Rd, APHB Colony, Moula Ali, Secunderabad,
              Telangana 500040, India
            </Typography>
            <Typography variant="body2" gutterBottom>
              <b>Call Us at</b> +91-9908109814
            </Typography>
            <Typography variant="body2" className={classes.map} gutterBottom>
              <b>Email Us at</b> ckumar.slc@gmail.com
            </Typography>
            <GoogleMap />
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <Card>
              <CardHeader
                subheader={
                  <Typography component="div" variant="body1">
                    We'll get back to you in 1-2 business days.
                  </Typography>
                }
                title={"Leave us a message!"}
              />

              <CardContent>
                {alertMsg && alertMsg.type === "success" && (
                  <Box mt={2} mb={3}>
                    <Alert
                      type="info"
                      msg={` Info:
                        ${alertMsg}`}
                    />
                  </Box>
                )}
                {alertMsg.msg && alertMsg.type === "error" && (
                  <Box mt={2} mb={3}>
                    <Alert type="error" msg={`Error: ${alertMsg.msg} `} />
                  </Box>
                )}
                <Box alignItems="center" display="flex" flexDirection="column">
                  <Form
                    schema={schema}
                    onSubmit={onSubmit}
                    btnLabel="Submit"
                    uiSchema={uiSchema}
                    onChange={transform}
                    formData={formData}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactUs;
