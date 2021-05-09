import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    maxHeight: "inherit",
    maxWidth: "inherit",
    height: "100%",
    width: "100%",
    backgroundColor: "#b1dfe6",
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
      <ListItem alignItems="flex-start" button={true}>
        <ListItemAvatar>
          <Avatar className={classes.cardAvatar} alt="Said Mohammed" />
        </ListItemAvatar>
        <ListItemText
          className={classes.cardText}
          primary={
            <React.Fragment>
              <Typography component="span" variant="h4" gutterBottom={true}>
                Java Utvecklare
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
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
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
    </div>
  );
};

export default PostCard;
