import React from "react";
import { Avatar as MUAvatar } from "@material-ui/core";
const Avatar = ({ title, img, ...props }) => {
  return (
    <MUAvatar id={title} alt={title} src={img} variant="circular" {...props}>
      {title.toUpperCase().charAt(0)}
    </MUAvatar>
  );
};
export default Avatar;
