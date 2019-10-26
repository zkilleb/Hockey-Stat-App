import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Player from "./img/player.png";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#D0D0D0"
  },
  header: {
    textAlign: "center"
  },
  media: {
    marginTop: 30,
    maxWidth: 345,
    align: "center"
  },
}));

function App() {
  const classes = useStyles();
  return (
      <Paper className={classes.root}>
        <Typography className={classes.header} variant="h3" component="h3">
          Welcome!
        </Typography>
        <Typography className={classes.header} style={{marginTop: 30}} component="p">
          This is an application for hockey stats. More information and stuff will go here later.
        </Typography>
      </Paper>
  );
}

export default App;
