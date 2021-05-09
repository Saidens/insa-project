// Placeholder file, ska ändras till [id].js

import React from "react";
import Header from "../components/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Button, colors, Link, ListItem, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Footer from "../components/Footer/Footer";
import List from "@material-ui/core/List";

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
  list: {
    textAlign: "left",
    fontFamily: "Verdana",
    fontSize: 17,
  },
  div2: {
    padding: 5,
    marginTop: 20,
    height: 700,
    width: "25%",
    //borderStyle: "solid",
    //border: "6px solid #134074",
    //borderRadius: '25px',
    boxSizing: "border-box",
    position: "sticky",
    top: 10,
    //backgroundColor: "#dbdaca",
  },
  flex: {
    display: "flex",
    backgroundColor: theme.palette.secondary.primary,
  },
  applyButton: {
    padding: 2,
    margin: 5,
    marginLeft: 40,
    width: "80%",
    height: 70,
    backgroundColor: "#55cee0",
  },
  snabbfakta: {
    height: 300,
    width: "80%",
    backgroundColor: "white",
    padding: 2,
    margin: 5,
    marginLeft: 40,
    border: "5px solid #124B54",
    borderRadius: "10px",
  },
  aboutJob: {
    marginTop: 50,
    margin: 5,
    padding: 2,
    marginLeft: 40,
    height: 200,
    width: "80%",
    //backgroundColor: "blue",
    border: "5px solid #124B54",
    textAlign: "center",
  },
  snabbHeader: {
    backgroundColor: "#208897",
    textAlign: "center",
  },
  snabbContentLayout: {
    display: "flex",
    flexDirection: "column",
  },
  snabbContent: {
    flex: 1,
  },
  footer: {
    marginTop: 40,
  },

  paragraph: {
    fontSize: 27,
    fontWeight: 400,
    fontFamily: "Roboto",
  },
}));

export default function jobIndex() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
            <div>2021-02-24</div>
          </Grid>
          <Grid item xs={1}>
            <div> Annons Id: 5000000</div>
          </Grid>
        </Grid>

        <div className={classes.header}>
          <Typography variant="h2" component={"span"}>
            <Box fontFamily="Roboto" fontWeight={100} lineHeight={2}>
              6 newly graduated economists to one of the worlds biggest fintech
              company
            </Box>
          </Typography>

          {/* <div>
              <Button className={classes.button}> Bokmärk Länk! </Button>
            </div> */}
        </div>
      </div>

      <div className={classes.flex}>
        <div className={classes.div1}>
          <div>
            <Typography
              variant={"h5"}
              component={"span"}
              className={classes.paragraph}
            >
              As a stakeholder mapping representative you will be laying the
              foundation for our clients most important deals and partnerships.
              This is a crucially important role to our clients company and you
              will therefore work closely with, and present your findings to the
              senior commercial teams. Do you want to get your foot in the door
              at a global fintech company? Send in your application today!
            </Typography>
          </div>

          <div>
            <Typography variant={"h5"} component={"span"}>
              <Box
                fontWeight={500}
                fontStyle="italic"
                lineHeight={3}
                fontFamily="Verdana"
              >
                Om Tjänsten
              </Box>
            </Typography>
          </div>

          <div>
            <Typography component={"span"}>
              <Box fontFamily="Verdana" lineHeight={1.8}>
                As you will be gaining a deep understanding in how B2B
                commercial organization, there is a great opportunity to grow
                into a sales or client success role as the next step in your
                career. You will be part of a global team and working closely
                with internal stakeholders located in all markets. This is a
                consultant assignment start asap to July 2021, with a
                possibility to get hired directly be the company or extend the
                assignment. You will have to do a logical test for this process,
                to try your skills you can do this:{" "}
                <Link>https://www.123test.com/logical-reasoning-test/</Link> We
                want you who get 9 and 10 to apply for this position.
              </Box>
            </Typography>
          </div>

          <div>
            <Typography variant={"h5"} component={"span"}>
              <Box
                fontWeight={500}
                fontStyle="italic"
                lineHeight={3}
                fontFamily="Verdana"
              >
                Arbetsuppgifter
              </Box>
            </Typography>
          </div>

          <div>
            <Typography component={"span"}>
              <Box fontFamily="Verdana" lineHeight={1.8}>
                In this role, you will find and determine the key stakeholders
                of target companies by doing thorough stakeholder mapping and
                research. You will use internal and external networks to
                pinpoint relevant connections to these key individuals, which
                will help our commercial organization enter negotiations quickly
                and win over our target companies.
              </Box>
            </Typography>
          </div>

          <div>
            <Typography variant={"h5"} component={"span"}>
              <Box
                fontWeight={500}
                fontStyle="italic"
                lineHeight={3}
                fontFamily="Verdana"
              >
                Vi söker dig som
              </Box>
            </Typography>
          </div>

          <div className={classes.list}>
            <ul>
              <li>
                Have had some contact with clients before and are new in your
                career
              </li>
              <li>CV in english</li>
              <li>
                Ambitious and shows significant drive in everything you do
              </li>
              <li>
                Passionate about your job and enjoys a fast paced, international
                working environment
              </li>
              <li>
                Proactive by nature and comes up with new thinking and ideation
                that adds value and innovation to your team
              </li>
              <li>
                Someone who is comfortable with change and can easily adapt to
                and embrace new tasks and challenges. We promise, you will not
                be bored
              </li>
              <li>An excellent communicator in verbal and written English</li>
              <li>Someone who has an exceptionally sales oriented mindset</li>
            </ul>
          </div>

          <div>
            <Typography variant={"h5"} component={"span"}>
              <Box
                fontWeight={500}
                fontStyle="italic"
                lineHeight={3}
                fontFamily="Verdana"
              >
                Övrig Information
              </Box>
            </Typography>
          </div>

          <div>
            <Typography component={"span"}>
              <Box fontFamily="Verdana" lineHeight={1.8}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </Box>
            </Typography>
          </div>
        </div>

        <div className={classes.div2}>
          <div>
            <Button className={classes.applyButton}>Ansök här!</Button>
          </div>
          <div className={classes.snabbfakta}>
            <div className={classes.snabbHeader}>
              <Typography
                component={"span"}
                style={{
                  color: "#f0f0ed",
                  textShadow: "0 0 3px #000000, 0 0 5px #000000",
                }}
              >
                <Box fontWeight="fontWeightBold" m={1} fontSize={30}>
                  Snabbfakta
                </Box>
              </Typography>
            </div>

            {/*formattering av snabbfakta*/}
            <div className={classes.snabbContentLayout}>
              {/* Rad 1 */}
              <div>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography component={"span"}>
                      <Box fontWeight="fontWeightBold" m={1} fontSize={17}>
                        Stad:
                      </Box>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography component={"span"}>
                      <Box fontWeight="fontWeightRegular" m={1} fontSize={17}>
                        Stockholm
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </div>

              {/* Rad 2 */}
              <div>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography component={"span"}>
                      <Box fontWeight="fontWeightBold" m={1} fontSize={17}>
                        Omfattning:
                      </Box>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography component={"span"}>
                      <Box fontWeight="fontWeightRegular" m={1} fontSize={17}>
                        Heltid, 8-17
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </div>

              <div>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography component={"span"}>
                      <Box fontWeight="fontWeightBold" m={1} fontSize={17}>
                        Typ av Uppdrag:
                      </Box>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography component={"span"}>
                      <Box fontWeight="fontWeightRegular" m={1} fontSize={17}>
                        Rekrytering
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </div>

              <div>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography component={"span"}>
                      <Box fontWeight="fontWeightBold" m={1} fontSize={17}>
                        Jobbkategori:
                      </Box>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography component={"span"}>
                      <Box fontWeight="fontWeightRegular" m={1} fontSize={17}>
                        Account Manager
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </div>

              <div>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography component={"span"}>
                      <Box fontWeight="fontWeightBold" m={1} fontSize={17}>
                        Startdatum:
                      </Box>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography component={"span"}>
                      <Box fontWeight="fontWeightRegular" m={1} fontSize={17}>
                        Omgående
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>

          <div className={classes.aboutJob}>
            <Typography component={"span"}>
              <Box fontWeight="fontWeightBold" m={1} fontSize={20}>
                Har du frågor om tjänsten?
              </Box>
            </Typography>
            <Typography component={"span"}>
              <Box fontWeight={500} m={1} fontSize={15}>
                Förnamn Efternamn eller någon av kollegorna i rekryteringsteamet
                svarar dig gärna på mail@insamail.se. Ange annons-ID i ditt
                mail: 5000000
              </Box>
            </Typography>
          </div>
        </div>
      </div>

      <Footer className={classes.footer} />
    </div>
  );
}
