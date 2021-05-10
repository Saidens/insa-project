import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    maxHeight: "inherit",
    maxWidth: "inherit",
    height: "100%",
    width: "100%",
    backgroundColor: "#DDF4F8",
    borderLeftStyle: "solid",
    borderLeftWidth: "5px",
    borderLeftColor: "#28a2b5",
  },

  cardAvatar: {
    width: 150,
    height: 150,
  },

  cardText: {
    marginLeft: 20,
  },
  cardFont: {
    fontSize: 14,
  },
  divider: {
    position: "inherit",
    marginTop: 30,
    top: 10,
    color: "black",
    width: "100%",
    backgroundColor: "black",
  },
}));

const PostCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href={"/signIn"} variant='inherit' color='inherit' underline='none'>
      <ListItem alignItems="flex-start" button={true} >
        <ListItemAvatar>
          <Avatar className={classes.cardAvatar} alt="Said Mohammed" />
        </ListItemAvatar>
        <ListItemText
          className={classes.cardText}
          primary={
            <React.Fragment>
              <Typography component="span" variant="h4" gutterBottom={true}>
              6 newly graduated economists to one of the worlds biggest fintech company
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="overline"
                color="textPrimary"
                className={classes.cardFont}
              >
                As a stakeholder mapping representative you will be laying the foundation for our clients most important deals and partnerships. This is a crucially important role to our clients company and you will therefore work closely with, and present your findings to the senior commercial teams. Do you want to get your foot in the door at a global fintech company? Send in your application today!
              </Typography>
            </React.Fragment>
          }
        />
        {/* Save Job Avatar, till höger. Byt ikon */}
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
      </ListItem>
      <div className={classes.divider}>
        <Divider variant="fullWidth"></Divider>
      </div>
      </Link>
    </div>
  );
};

export default PostCard;
