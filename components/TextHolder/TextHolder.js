import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography/Typography'
import Box from '@material-ui/core/Box/Box'

const useStyles = makeStyles((theme) => ({
    paragraph: {
        fontSize: 27,
        fontWeight: 400,
        fontFamily: "Roboto",
      },
      list: {
        textAlign: "left",
        fontFamily: "Verdana",
        fontSize: 17,
      },
}));

const TextHolder = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Typography
          variant={"h5"}
          component={"span"}
          className={classes.paragraph}
        >
          {props.subHeader}
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
            {props.aboutPosition}
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
            {props.tasks}
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
            Have had some contact with clients before and are new in your career
          </li>
          <li>CV in english</li>
          <li>Ambitious and shows significant drive in everything you do</li>
          <li>
            Passionate about your job and enjoys a fast paced, international
            working environment
          </li>
          <li>
            Proactive by nature and comes up with new thinking and ideation that
            adds value and innovation to your team
          </li>
          <li>
            Someone who is comfortable with change and can easily adapt to and
            embrace new tasks and challenges. We promise, you will not be bored
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
            {props.extraInfo}
          </Box>
        </Typography>
      </div>
    </div>
  );
};
export default TextHolder;
