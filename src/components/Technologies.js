import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,

  // TimelineDot
} from '@mui/lab';
import { Typography, makeStyles, Paper } from '@material-ui/core';
import IconoReact from '../images/react_icono.png';
import Javascript from '../images/javascript.png';
import Nodejs from '../images/nodejs.png';
import StarRating from './StarRating';

const Technologies = () => {
  const classes = useStyles();
  const skills = [
    { year: '2021', src: Javascript, title: 'JavaScript', stars: 4 },
    { year: '2021', src: IconoReact, title: 'React', stars: 4 },
  ];

  return (
    <Timeline position="right">
      {skills.map(({ year, title, stars, src }, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="h6" color="textSecondary">
              {year}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <img src={src} alt={title} className={classes.customlogo} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={0} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {title}
              </Typography>
              <StarRating stars={stars}></StarRating>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

const useStyles = makeStyles((theme) => ({
  customlogo: { width: '50px', objectFit: 'contain' },
  paper: { maxWidth: '200px', padding: '6px 16px' },
}));

export default Technologies;
