import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Header from "../components/Header/Header";
import Button from "@material-ui/core/Button";
import Footer from "../components/Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
  },

  toolbar: {
    //borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(3),
  },
  toolbarTitle: {
    flex: 1,
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/user/erondu)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.7)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  button: {
    backgroundColor: "#55cee0",
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(10),
    width: 250,
  },
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  footer: {
    position: "relative",
    marginTop: 400,
  },
}));

const Blog = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Header></Header>
        <CssBaseline />
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Toolbar className={classes.toolbar}>
                <Typography
                  component="h2"
                  variant="h2"
                  color="inherit"
                  align="center"
                  noWrap
                  className={classes.toolbarTitle}
                >
                  LoGo
                </Typography>
              </Toolbar>
            </Grid>

            <Grid item xs={4}>
              <Button
                href={"/jobIndex"}
                size="large"
                className={classes.button}
              >
                Sök Jobb
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button size="large" className={classes.button}>
                Hitta Personal- Ej implementerad
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                href={"/posts/article1"}
                size="large"
                className={classes.button}
              >
                Annons Exempel 1
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                href={"/posts/article2"}
                size="large"
                className={classes.button}
              >
                Annons Exempel 2
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                href={"/posts/article3"}
                size="large"
                className={classes.button}
              >
                Annons Exempel 3
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                href={"/posts/article4"}
                size="large"
                className={classes.button}
              >
                Annons Exempel 4
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
