import { makeStyles } from "@material-ui/core/styles";
import { Button, colors, Link, ListItem, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
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
  snabbHeader: {
    backgroundColor: "#208897",
    textAlign: "center",
  },
  snabbContentLayout: {
    display: "flex",
    flexDirection: "column",
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
}));

const Snabbfakta = (props) => {
  const classes = useStyles();

  return (
    <div>
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

        {/*  snabbfakta*/}
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
                    {props.city}
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
                    {props.scope}
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
                    {props.type}
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
                    {props.category}
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
                    {props.startDate}
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
        {/* Slut Snabbfakta */}
      </div>

      <div className={classes.aboutJob}>
        <Typography component={"span"}>
          <Box fontWeight="fontWeightBold" m={1} fontSize={20}>
            Har du frågor om tjänsten?
          </Box>
        </Typography>
        <Typography component={"span"}>
          <Box fontWeight={500} m={1} fontSize={15}>
            {props.contact} eller någon av kollegorna i rekryteringsteamet
            svarar dig gärna på mail@insamail.se. Ange annons-ID i ditt mail{" "}
            {props.id}
          </Box>
        </Typography>
      </div>
    </div>
  );
};
export default Snabbfakta;
