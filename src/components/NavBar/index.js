import * as React from "react";
import { Link as RLink } from "react-router-dom";
import { HideOn } from "react-hide-on-scroll";
import { makeStyles, useTheme } from "@mui/styles";
import {
  AppBar,
  Grid,
  Divider,
  Link as MLink,
  Box,
  Toolbar,
  Typography,
  SvgIcon,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "../Layouts/Link";
import AppBarOffset from "../Layouts/AppbarOffset";

import MiniNavMenu from "./MiniNavMenu";
import NavMenu from "./NavMenu";

const useStyles = makeStyles((theme) => ({
  hideOn: {
    backgroundColor: theme.white.main,
    color: theme.black.main,
    minHeight: "50px",
    padding: "0 8% !important",
  },
  centerItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  toolbar: {
    backgroundColor: theme.white.main,
    color: theme.black.main,
    padding: "0 8% !important",
  },
  mailOrphone: {
    color: theme.black.fade,
  },
  loginOrregister: {
    color: theme.orange.main,
    fontSize: "15px",
  },
  title: {
    color: theme.orange.main,
    textDecoration: "none",
  },
}));
const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const ismobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleOpenNavMenu = () => {
    setOpenMenu(!openMenu);
  };

  const OuterLink = ({ to, children, ...props }) => {
    return (
      <MLink
        href={to}
        component="a"
        underline="none"
        className={classes.centerItem}
        {...props}
      >
        {children}
      </MLink>
    );
  };
  return (
    <div>
      <AppBar position="fixed" id="app-bar">
        <HideOn atHeight height={1}>
          <Grid container spacing={2} className={classes.hideOn}>
            <Grid item xs={12} sm={6} md={6} className={classes.centerItem}>
              <Typography variant="captionText" className={classes.centerItem}>
                <OuterLink
                  to="mailto:sahinya.g@bsukars.com"
                  style={{ paddingRight: 20 }}
                >
                  <span className={classes.mailOrphone}>
                    sahinyasasi@gmail.com
                  </span>
                </OuterLink>
                <OuterLink to="tel:9490753958">
                  <SvgIcon>
                    <PhoneIcon style={{ fill: "#6e6e6e" }} />
                  </SvgIcon>
                  <span className={classes.mailOrphone}>+91 9490753928</span>
                </OuterLink>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} className={classes.centerItem}>
              <Typography variant="captionText">
                <Link to="/login" underline="none">
                  <span className={classes.loginOrregister}>Login</span>
                </Link>{" "}
                Or{" "}
                <Link to="/signup" underline="none">
                  <span className={classes.loginOrregister}>Register</span>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </HideOn>
        <Divider light={true} style={{ background: "#d9d9d9" }} />
        <Toolbar className={classes.toolbar}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h5"
              noWrap
              component={RLink}
              to="/"
              className={classes.title}
            >
              BSU KARS
            </Typography>
          </Box>
          <NavMenu />
          <IconButton
            size="large"
            id="nav-menu"
            onClick={handleOpenNavMenu}
            sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        {openMenu && ismobile ? <MiniNavMenu /> : <></>}
      </AppBar>
      <AppBarOffset />
    </div>
  );
};
export default NavBar;
