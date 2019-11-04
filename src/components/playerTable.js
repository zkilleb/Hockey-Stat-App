import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {formatBirthdate, formatBirthplace } from "../util/util";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

export default function PlayerTable({ players }) {
  const classes = useStyles();
  let items = [];
  const alphaPlayers = players.sort((a, b) => (a.person.lastName > b.person.lastName ? 1 : -1));
  alphaPlayers.forEach(player => {
    items.push(
      <TableRow>
        <TableCell component="th" scope="row">
          {player.person.fullName}
        </TableCell>
        <TableCell>{player.jerseyNumber}</TableCell>
        <TableCell>{player.position.abbreviation}</TableCell>
        <TableCell>{formatBirthdate(player.person.birthDate)}</TableCell>
        <TableCell>{player.person.currentAge}</TableCell>
        <TableCell>{player.person.height}</TableCell>
        <TableCell>{player.person.weight}</TableCell>
        <TableCell>{formatBirthplace(player.person)}</TableCell>
      </TableRow>
    );
  });

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Number</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Birthdate</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Height</TableCell>
            <TableCell>Weight (lbs)</TableCell>
            <TableCell>Birthplace</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{items}</TableBody>
      </Table>
    </Paper>
  );
}
