import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { categoryList, regionList, miscList } from "../../src/listData";
import ListItem from "@material-ui/core/ListItem/ListItem";
import List from "@material-ui/core/List/List";
import ListSubheader from "@material-ui/core/ListSubheader/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    color: "black",
    verflowY: "scroll",
    height: 370,
  },
  jobFilter: {
    marginTop: 25,
    position: "relative",
    backgroundColor: "teal",
    width: "100%",
    height: 370,
    border: "2px solid #999",
    borderRadius: "10px",
    overflow: "hidden",
  },
  header: {
    textAlign: "center",
    fontSize: "20px",
    backgroundColor: "#9bc6cc",
  },
  button: {
    height: 45,
  },
}));

const JobFilter = (props) => {
  const classes = useStyles();

  let list;

  switch (props.name) {
    case "Jobbkategori":
      list = categoryList;
      break;
    case "Region":
      list = regionList;
      break;
    case "Övriga Filter":
      list = miscList;
      break;
  }

  //Renderar de olika listorna baserad på data from listData.js
  const categoryContent = list.map((list) => (
    <div>
      <ListItem button className={classes.button}>
        <ListItemIcon>
          <ChevronRightIcon />
        </ListItemIcon>
        <ListItemText primary={list.category} />
      </ListItem>
    </div>
  ));

  return (
    <div className={classes.jobFilter}>
      <List
        style={{ overflowY: "auto" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            className={classes.header}
          >
            {props.name}
          </ListSubheader>
        }
        className={classes.root}
      >
        {categoryContent}
      </List>
    </div>
  );
};

export default JobFilter;
