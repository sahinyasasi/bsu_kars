import React from "react";
import Typography from "@material-ui/core/Typography";
import { Breadcrumbs as MUBreadcrumbs } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "./Link";

const BreadCrumbs = ({ options, maxItems, ...props }) => {
  return (
    <MUBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
      maxItems={maxItems ? maxItems : 5}
      {...props}
    >
      {options.map((option, index) => {
        if (index !== options.length - 1) {
          return (
            <Link key={option.label} color="inherit" to={option.path}>
              <Typography> {option.label}</Typography>
            </Link>
          );
        } else {
          return (
            <Typography key={option.label} color="textPrimary">
              {option.label}
            </Typography>
          );
        }
      })}
    </MUBreadcrumbs>
  );
};
export default BreadCrumbs;
