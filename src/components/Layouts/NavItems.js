import React from "react";

import { makeStyles, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import Avatar from "./Avatar";

import MiniNavMenu from "./MiniNavMenu";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "./Button";

const useStyles = makeStyles((theme) => ({
  buttons: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const NavItems = ({
  user,
  loggedIn,
  handleLogout,
  myAccount,
  account,
  mobileSizeMenuItems,
}) => {
  const classes = useStyles();

  const theme = useTheme();
  const ismobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      {ismobile ? (
        <>
          {!loggedIn && (
            <MiniNavMenu
              name="MenuIcon"
              isIcon={true}
              icon={MenuIcon}
              menuItems={account}
            />
          )}
          {loggedIn && (
            <MiniNavMenu
              name="AccountIcon"
              isIcon={true}
              icon={Avatar}
              menuItems={mobileSizeMenuItems.concat(myAccount)}
              handleLogout={handleLogout}
              user={user}
            />
          )}
        </>
      ) : (
        <div className={classes.buttons}>
          {!loggedIn && (
            <>
              {account.map((acc) => {
                return (
                  <Button
                    color="default"
                    key={acc.id}
                    href={acc.path}
                    label={acc.title}
                  />
                );
              })}
            </>
          )}
          {loggedIn && (
            <>
              {mobileSizeMenuItems.map((acc) => {
                return (
                  <Button
                    color="default"
                    key={acc.id}
                    href={acc.path}
                    label={acc.title}
                  />
                );
              })}

              <MiniNavMenu
                name="MyAccount"
                isIcon={true}
                icon={Avatar}
                menuItems={myAccount}
                handleLogout={handleLogout}
                user={user}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default NavItems;
