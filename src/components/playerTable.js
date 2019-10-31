import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

export default function PlayerTable(props) {
  const classes = useStyles();
  let items = [];
  props.players.forEach(player => {
    items.push(
      <TableRow>
        <TableCell component="th" scope="row">
          {player.person.fullName}
        </TableCell>
        <TableCell align="right">{player.jerseyNumber}</TableCell>
        <TableCell align="right">{player.position.abbreviation}</TableCell>
      </TableRow>
    );
  });

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Number</TableCell>
            <TableCell align="right">Position</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{items}</TableBody>
      </Table>
    </Paper>
  );
}
