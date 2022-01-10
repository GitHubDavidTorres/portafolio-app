import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Technologies from './Technologies';

const Skills = ({ title, id, dark }) => {
  const classes = useStyles();
  return (
    //Solo si dark es verdadero se añadira sectiondark
    <div className={`${classes.section} ${!dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Technologies />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: { minHeight: '100vh' },
  sectiondark: { background: '#fafafa' },
}));

export default Skills;

