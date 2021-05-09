import React from "react";
import Header from "../components/Header/Header";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Footer from "../components/Footer/Footer";
import Postcard from "../components/Postcard/Postcard";
import JobFilter from "../components/JobFilter/JobFilter";
import PostCardList from "../components/PostcardList/PostCardList";

const useStyles = makeStyles((theme) => ({
  name: {},
  h1:{
    textAlign: 'center',
    padding: 5,
    margin: 5,
  },

  card: {
    marginLeft: 120,
    backgroundColor: "orange",
    width: 1000,
    height: 300,
    display: "flex",
    position: "relative",
    margin: "5px auto",
  },

  cardAvatar: {
    width: 150,
    height: 150,
  },

  cardText: {
    marginLeft: 20,
  },
  grid: {
    marginBottom: 50,
  },
  paper: {
    borderStyle: " inset",
    borderWidth: 4,
  },

  mainFeaturedPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
    backgroundImage:
      "url(https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 500,
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
  },

  PostCardList: {
    position: "relative",
    marginBottom: 50,
    padding: 30,
  },
}));

export default function jobIndex() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Typography variant='h2' className={classes.h1}>Vad söker du för jobb?</Typography>
      <CssBaseline />
      <Container>
        <Paper className={classes.mainFeaturedPost}>
          {/* Höjer prio av img */}
          {
            <img
              style={{ display: "none" }}
              src="https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="background"
            />
          }
          <Grid container>
            <Grid item md={4}>
              <div className={classes.mainFeaturedPostContent}>
                <JobFilter name={"Jobbkategori"}></JobFilter>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className={classes.mainFeaturedPostContent}>
                <JobFilter name={"Region"}></JobFilter>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className={classes.mainFeaturedPostContent}>
                <JobFilter name={"Övriga Filter"}></JobFilter>
              </div>
            </Grid>
          </Grid>
        </Paper>

        
        <div className={classes.PostCardList}>
          <PostCardList></PostCardList>
        </div>

      </Container>
      <Footer />
    </div>
  );
}
