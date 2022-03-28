import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Link from "./Link";
import { withRouter } from "react-router-dom";
import IconButton from "./IconButton";
import Menu from "./Menu";

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const MiniNavMenu = (props) => {
  const {
    handleLogout,
    history,
    name,
    menuItems,
    isIcon,
    icon: Icon,
    user,
  } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (path) => {
    if (path === "/logout") {
      handleLogout();
    } else {
      history.push(path);
    }
    setAnchorEl(null);
  };

  if (isIcon) {
    return (
      <>
        <IconButton
          aria-label="Main Menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
        >
          <Icon title={user && user.first_name} img={user && user.img} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          onClick={handleMenuClick}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          menulist={menuItems}
          getContentAnchorEl={null}
        />
      </>
    );
  } else {
    return (
      <>
        <Link variant="button" onClick={handleMenu} className={classes.link}>
          {name}
        </Link>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          onClick={handleMenuClick}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          menulist={menuItems}
          getContentAnchorEl={null}
        />
      </>
    );
  }
};

export default withRouter(MiniNavMenu);
