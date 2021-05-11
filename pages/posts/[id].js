import React from "react";
import Header from "../../components/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import {Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Footer from "../../components/Footer/Footer";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Snabbfakta from "../../components/Snabbfakta/Snabbfakta.js";
import TextHolder from "../../components/TextHolder/TextHolder.js";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
  },
  header: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: 5,
    marginBottom: 150,
    marginTop: 50,
    backgroundColor: "#BBEAF1",
  },

  label: {
    //marginLeft: 20,
    marginTop: 20,
  },
  button: {
    position: "relative",
    display: "flex",
    marginLeft: 480,
  },
  div1: {
    padding: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 1500,
    width: "75%",
    borderLeftStyle: "solid",
    borderLeftWidth: 5,
    borderLeftColor: "#28A2B5",
    boxSizing: "border-box",
    textAlign: "center",
    backgroundColor: "#white",
  },

  div2: {
    padding: 5,
    marginTop: 20,
    height: 700,
    width: "25%",
    boxSizing: "border-box",
    position: "sticky",
    top: 10,
  },
  flex: {
    display: "flex",
    backgroundColor: theme.palette.secondary.primary,
  },
  snabbContent: {
    flex: 1,
  },
  footer: {
    marginTop: 40,
  },
}));

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function jobIndex({ postData }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>{postData.title}</Head>
      <div>
        <Header />
      </div>

      <div>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          className={classes.label}
        >
          <Grid item xs={1}>
            <div>{postData.date}</div>
          </Grid>
          <Grid item xs={1}>
            <div> Annons Id: {postData.id}</div>
          </Grid>
        </Grid>

        <div className={classes.header}>
          <Typography variant="h2" component={"span"}>
            <Box fontFamily="Roboto" fontWeight={100} lineHeight={2}>
              {postData.title}
            </Box>
          </Typography>
        </div>
      </div>

      <div className={classes.flex}>
        {/* start div1 */}
        <div className={classes.div1}>
          <TextHolder
            subHeader={postData.subHeader}
            aboutPosition={postData.aboutPosition}
            tasks={postData.tasks}
            extraInfo={postData.extraInfo}
          ></TextHolder>
        </div>
        {/* End div1 */}

        {/* start div2 */}

        <div className={classes.div2}>
          <Snabbfakta
            city={postData.city}
            scope={postData.scope}
            type={postData.type}
            category={postData.category}
            startDate={postData.startDate}
            contact={postData.contact}
            id={postData.id}
          ></Snabbfakta>
        </div>

        {/* End div2 */}
      </div>
      <div>
        <Footer className={classes.footer} />
      </div>
    </div>
  );
}
