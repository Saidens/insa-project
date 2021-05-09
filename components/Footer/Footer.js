import React from "react";
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
  copyright:{
    marginTop: 50,
    position: 'relative',
  },
  grid:{
      position: 'relative',
      top: 40,
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.grid}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          className={classes.copyright}
        >
          <Grid item xs={6}>
            <Typography>Copyright © LoGo 2021.</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Said Mohammed</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
