import React from 'react';
import { CardContent, makeStyles, Typography } from '@material-ui/core';
import mockData from '../mockData';
import { Card, CardMedia, Grid, Link } from '@mui/material';

const MyWork = ({ id, title, dark }) => {
  const classes = useStyles();

  return (
    //Solo si dark es verdadero se añadira sectiondark
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h4">{title}</Typography>
        <Grid container className={classes.grid}>
          {mockData.map(({ title, link, image }, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  image={image}
                  alt="project"
                  className={classes.photo}
                />
                <CardContent>
                  <Link
                    href={link}
                    color="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography variant="h5" color="primary" align="center">
                      {title}
                    </Typography>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: { minHeight: '100vh' },
  sectiondark: { background: '#333', color: '#fff' },
  sectioncontent: {
    maxWidth: '90vw',
    margin: '0 auto',
    padding: theme.spacing(3),
  },
  grid: { marginTop: theme.spacing(10) },
  card: { maxWidth: 345, minHeight: 275, margin: theme.spacing(3) },
  photo: { height: 30, paddingTop: '56.25%' },
}));

export default MyWork;
