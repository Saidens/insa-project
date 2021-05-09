import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid/Grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#28a2b5",
    height: 230,
    position: "relative",
    bottom: 0,
    marginTop: 50,
  },
  toolbarr: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "green",
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Grid container direction="row" className={classes.toolbarr}>
        <Grid item xs={6}>
          <Typography>Grid 1 Item 1</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Grid 1 Item 2</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
