import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px",
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#1976d2",
    color: theme.palette.text.primary,
  },
}));

export default function CountryGrid() {
  const classes = useStyles();
  const [{ countries }, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {countries.map((country) => {
          return (
            <Grid item xs={12} sm={6} lg={4}>
              <Paper className={classes.paper}>{country}</Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
