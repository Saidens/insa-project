import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import PostCard from '../Postcard/Postcard';


const useStyles = makeStyles((theme) => ({
    root:{
      marginBottom: 50,
    },

}));

const PostCardList = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>
            <Paper variant="outlined">
              <PostCard></PostCard>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div>
            <Paper variant="outlined">
              <PostCard></PostCard>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div>
            <Paper variant="outlined">
              <PostCard></PostCard>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostCardList;
