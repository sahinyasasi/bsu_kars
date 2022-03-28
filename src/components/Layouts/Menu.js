import React from "react";
import { Menu as MUMenu } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

const Menu = ({ open, menulist, onClick, anchorEl, ...props }) => {
  return (
    <MUMenu anchorEl={anchorEl} keepMounted open={open} {...props}>
      {menulist.map((item, menuindex) => (
        <MenuItem key={menuindex} onClick={() => onClick(item.path)}>
          {item.title}
        </MenuItem>
      ))}
    </MUMenu>
  );
};
export default Menu;
