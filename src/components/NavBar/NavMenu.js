import * as React from "react";
import { Link as RLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box, Menu, MenuItem } from "@mui/material";
import Button from "../Layouts/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block !important",
    padding: "0 15px !important",
    marginLeft: "20px !important",
  },
}));
const NavMenu = () => {
  const classes = useStyles();
  const [anchorPageEl, setAnchorPageEl] = React.useState(null);
  const [anchorAccEl, setAnchorAccEl] = React.useState(null);
  const openPage = Boolean(anchorPageEl);
  const openAcc = Boolean(anchorAccEl);

  const handlePageClick = (event) => {
    setAnchorPageEl(event.currentTarget);
  };
  const handlePageClose = () => {
    setAnchorPageEl(null);
  };
  const handleAccClick = (event) => {
    setAnchorAccEl(event.currentTarget);
  };

  const handleAccClose = () => {
    setAnchorAccEl(null);
  };

  return (
    <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
      <Button
        label="Home"
        variant="text"
        size="medium"
        href="/"
        color="inherit"
        className={classes.button}
      />
      <Button
        label="Sell Car"
        size="medium"
        href="/sell-car"
        className={classes.button}
        style={{ backgroundColor: "rgba(240, 56, 10, 0.8)" }}
      />
      <Button
        label="Buy Car"
        size="medium"
        href="/buy-car"
        className={classes.button}
        style={{ backgroundColor: "rgba(240, 56, 10, 0.8)" }}
      />

      <Button
        label="Pages"
        variant="text"
        color="inherit"
        size="medium"
        className={classes.button}
        aria-controls={openPage ? "pages-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openPage ? "true" : undefined}
        onClick={handlePageClick}
        onMouseOver={handlePageClick}
      />

      <Menu
        id="pages-menu"
        MenuListProps={{
          "aria-labelledby": "Pages",
          onMouseLeave: (e) => {
            handlePageClose(e);
          },
        }}
        anchorEl={anchorPageEl}
        open={openPage}
        onClose={handlePageClose}
      >
        <MenuItem component={RLink} to="/contactus">
          Contact Us
        </MenuItem>
        <MenuItem component={RLink} to="/aboutus">
          About Us
        </MenuItem>
      </Menu>
      <Button
        label="Account"
        variant="text"
        color="inherit"
        size="medium"
        className={classes.button}
        aria-controls={openAcc ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openAcc ? "true" : undefined}
        onClick={handleAccClick}
        onMouseOver={handleAccClick}
      />

      <Menu
        id="account-menu"
        MenuListProps={{
          "aria-labelledby": "Account",
          onMouseLeave: (e) => {
            handleAccClose(e);
          },
        }}
        anchorEl={anchorAccEl}
        open={openAcc}
        onClose={handleAccClose}
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
    </Box>
  );
};
export default NavMenu;
