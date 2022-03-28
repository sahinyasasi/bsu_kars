import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { UserContext } from "../../contexts/userContext";

const footerUrls = [
  {
    title: "About Us",
    href: "/about_us",
  },

  {
    title: "Contact Us",
    href: "/contact_us",
  },
  {
    title: "Terms and Conditions",
    href: "https://privacyterms.io/view/GArzc2Ce-YdKfcFOz-NMp9DV/",
    target: "_blank",
  },
  {
    title: "Privacy Policy",
    href: "https://privacyterms.io/view/47Vl9mVW-OcHDu94E-5mJwrt/",
    target: "_blank",
  },
  {
    title: "Cookie Policy",
    href: "https://www.cookiepolicygenerator.com/live.php?token=9zokqdURDD2gqIPhXUcmdwrJ0VjWFC1h",
    target: "_blank",
  },
];
const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];
const companyUrl = "https://www.srilaxmicars.com/";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
    position: "sticky",
  },
}));

function Copyright({ companyUrl }) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        {companyUrl}
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

function AboutUs({ loggedIn, footerUrls }) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {!loggedIn && (
        <>
          <Link color="inherit" href="/login">
            Login
          </Link>
          {" | "}
        </>
      )}
      {footerUrls.map((footer) => {
        return (
          <Link
            color="inherit"
            href={footer.href}
            target={footer.target}
            key={footer.title}
          >
            {footer.title}
            {" | "}
          </Link>
        );
      })}
    </Typography>
  );
}
const Footer = () => {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  return (
    <Container maxWidth="lg" component="footer" className={classes.footer}>
      {/*<Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="textSecondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>*/}
      <Box mt={2}>
        <Copyright companyUrl={companyUrl} />
      </Box>
      <Box mt={2}>
        <AboutUs loggedIn={user && true} footerUrls={footerUrls} />
      </Box>
    </Container>
  );
};
export default Footer;
