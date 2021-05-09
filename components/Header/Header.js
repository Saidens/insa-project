import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import theme from '../../src/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  links: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
    paddingTop: theme.spacing(2),
  },
  link:{
    flexGrow: 1,
    marginRight: theme.spacing(3),
  },
  toolbar: {
    flexGrow: 50,
    minHeight: 100,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor: "#28a2b5",
  },
  title: {
    flexGrow: 10,
    alignSelf: 'flex-end',
    marginLeft: theme.spacing(1),
    marginRight: 400,
    
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h3" noWrap>
            <Link href={"/#"} color="inherit" underline="none">
            LoGo
            </Link>
          </Typography>
          <Typography className={classes.links} variant="h5" noWrap>
            <Link href={"/jobIndex"} className={classes.link} color="inherit">
              Lediga Jobb
            </Link>
            <Link href="#" className={classes.link} color="inherit">
              För Studenter
            </Link>
            <Link href="#" className={classes.link} color="inherit">
              För Arbetsgivare
            </Link>
            <Link href={`/signUp`} className={classes.link} >
              Logga In
            </Link>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
    </MuiThemeProvider>
  );
}