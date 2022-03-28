import * as React from "react";
import clsx from "clsx";
import { Link as RLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Typography, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const useStyles = makeStyles((theme) => ({
  menuList: {
    textDecoration: "none",
    color: theme.black.light,
    backgroundColor: theme.white.main,
    padding: "0 8%",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontSize: 20,
  },
  dropdown: {
    display: "flex",
    alignItems: "center",
  },
  color: {
    color: theme.orange.main,
  },
}));
const MiniNavMenu = () => {
  const classes = useStyles();
  const [anchorAccEl, setAnchorAccEl] = React.useState(null);
  const [anchorPagesEl, setAnchorPagesEl] = React.useState(null);
  const openPages = Boolean(anchorPagesEl);
  const openAccount = Boolean(anchorAccEl);

  const handleAccountClick = (event) => {
    setAnchorAccEl(event.currentTarget);
  };
  const handleAccountClose = () => {
    setAnchorAccEl(null);
  };

  const handlePagesClick = (event) => {
    setAnchorPagesEl(event.currentTarget);
  };
  const handlePagesClose = () => {
    setAnchorPagesEl(null);
  };

  return (
    <>
      <Typography noWrap component={RLink} to="/" className={classes.menuList}>
        Home
      </Typography>
      <Typography
        noWrap
        component={RLink}
        to="/sell-car"
        className={clsx(classes.menuList, classes.color)}
      >
        Sell Car
      </Typography>
      <Typography
        noWrap
        component={RLink}
        to="/buy-car"
        className={clsx(classes.menuList, classes.color)}
      >
        Buy Car
      </Typography>
      <Typography
        id="pages"
        aria-haspopup="true"
        aria-expanded={openPages ? "true" : undefined}
        className={clsx(classes.menuList, classes.dropdown)}
        onClick={handlePagesClick}
      >
        Pages
        <KeyboardArrowDownIcon fontSize="small" />
      </Typography>
      <Menu
        id="pages-menu"
        anchorEl={anchorPagesEl}
        open={openPages}
        MenuListProps={{
          "aria-labelledby": "pages",
        }}
        PaperProps={{
          style: {
            left: "75%",
            transform: "translateX(50%) translateY(0%)",
          },
        }}
        onClose={handlePagesClose}
      >
        <MenuItem component={RLink} to="/contactus">
          Contact Us
        </MenuItem>
        <MenuItem component={RLink} to="/aboutus">
          About Us
        </MenuItem>
      </Menu>
      <Typography
        id="account"
        aria-haspopup="true"
        aria-expanded={openAccount ? "true" : undefined}
        className={clsx(classes.menuList, classes.dropdown)}
        onClick={handleAccountClick}
      >
        Account
        <KeyboardArrowDownIcon fontSize="small" />
      </Typography>

      <Menu
        id="account-menu"
        anchorEl={anchorAccEl}
        open={openAccount}
        MenuListProps={{
          "aria-labelledby": "account",
        }}
        PaperProps={{
          style: {
            left: "75%",
            transform: "translateX(50%) translateY(0%)",
          },
        }}
        onClose={handleAccountClose}
      >
        <MenuItem component={RLink} to="/profile">
          Profile
        </MenuItem>
        <MenuItem component={RLink} to="/myaccount">
          My account
        </MenuItem>
        <MenuItem component={RLink} to="/">
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
export default MiniNavMenu;
