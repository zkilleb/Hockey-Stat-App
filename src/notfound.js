import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    textAlign: "center"
  }
}));

export default function Notfound() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.root} variant="h5" component="h3">
        {" "}
        404 - Page Not found
      </Typography>
      <Typography className={classes.root} variant="h5" component="h3">
        <Link to={"/"}>Return Home</Link>
      </Typography>
    </div>
  );
}
