import React from "react";
import { currTeamIDs } from "../api/endpoints";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const sortedTeams = currTeamIDs.sort((a, b) => (a.name > b.name ? 1 : -1));

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

export default function TeamSelect() {
  const classes = useStyles();
  let items = [];
  sortedTeams.forEach(element => {
    items.push(
      <Grid item xs={6} sm={2}>
        <Link
          to={`/teamdetail?${element.name.toLowerCase()}`}
          style={{ textDecoration: "none" }}
        >
          <Paper className={classes.root}>
            <img
              alt={element.name}
              width="30"
              height="30"
              src={require(`../img/teamLogos/${element.name
                .toLowerCase()
                .replace(/ /g, "_")}.png`)}
            />
            {element.name}
          </Paper>
        </Link>
      </Grid>
    );
  });
  return (
    <Grid className={classes.outerPaper} container spacing={0}>
      {items}
    </Grid>
  );
}
