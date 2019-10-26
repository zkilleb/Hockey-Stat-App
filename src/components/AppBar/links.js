import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  menuItem: {
    textAlign: "center",
    color: "white"
  }
}));

const links = ["Teams", "Players", "Standings"];

export default function Links() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {links.map(text => {
        return (
          <Grid item xs={0}>
            <Typography className={classes.menuItem} color="inherit">
            <Link style={{textDecoration: 'none', color: 'white'}} to={`/${text.toLowerCase()}`}>{text}</Link>
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}
