import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import foto from '../images/react_foto.png';
import Filedownload from '../images/CurriculumVitae2022.pdf';

const About = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    //Solo si dark es verdadero se añadira sectiondark
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h4">{title}</Typography>
        <Card className={classes.card}>
          <CardMedia
            image={foto}
            className={classes.media}
            title="react_picture"
          />
          <CardContent className={classes.cardcontent}>
            <TypeWriterEffect
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, necessitatibus?"
              textStyle={{
                fontSize: '1.5rem',
                fontWeight: '700px',
                color: 'tomato',
                maxWidth: '25ch',
              }}
              startDelay={100}
              cursorColor="black"
              typeSpeed={100}
            />
            <TypeWriterEffect
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, necessitatibus?"
              textStyle={{
                fontSize: '1.2rem',
                fontWeight: '500px',
                maxWidth: '25ch',
              }}
              startDelay={9700}
              cursorColor="black"
              typeSpeed={100}
            />
            <Typography variant="h6" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              animi.{' '}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" className={classes.pdfbutton}>
              <a href={Filedownload} download>
                Download CV
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: { minHeight: '100vh' },
  sectiondark: { background: '#333 ', color: '#fff' },
  sectioncontent: { maxWidth: '80vw', margin: '0 auto' },
  card: {
    height: '70vh',
    display: 'flex',
    marginTop: theme.spacing(3),
    position: 'relative',
    borderRadius: '20px',
  },
  media: {
    width: '300px',
    height: 'auto',
    objectFit: 'cover',
  },
  cardcontent: {
    marginTop: theme.spacing(2),
    '& h6': {
      marginTop: theme.spacing(6),
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  },
  pdfbutton: {
    [theme.breakpoints.down('sm')]: { bottom: '2.5rem', right: '1rem' },
    position: 'absolute',
    bottom: '5rem',
    right: '4rem',
    style: 'none',
    background: 'tomato',
    padding: theme.spacing(3),
    '& hover': { backgroundColor: '#fff' },
    '& a': { color: '#fff', fontWeight: 1000 },
    '& a:hover': { color: 'tomato' },
  },
}));

export default About;
