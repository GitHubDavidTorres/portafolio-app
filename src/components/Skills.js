import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Technologies from './Technologies';
import Studying from './Studying';

const Skills = ({ title, id, dark }) => {
  const classes = useStyles();
  return (
    //Solo si dark es verdadero se añadira sectiondark
    <div className={`${classes.section} ${!dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h4">{title}</Typography>
        <Technologies />
        <Typography variant="h4">Studying</Typography>
        <Studying />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: { minHeight: '100vh' },
  sectiondark: { background: '#fafafa' },
  sectioncontent: {
    marginTop: theme.spacing(3),
    '& h4': { marginBottom: theme.spacing(20) },
  },
}));

export default Skills;
