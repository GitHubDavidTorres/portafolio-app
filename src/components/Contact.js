import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { Radio, TextField } from '@mui/material';
import React, { useState } from 'react';

const Contact = ({ id, title, dark }) => {
  const [value, setValue] = useState('Say Hi');
  const handlerChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  return (
    //Solo si dark es verdadero se añadira sectiondark
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h4">{title}</Typography>
        <Paper className={classes.paper} elevation={8}>
          <div className={classes.titleandchoices}>
            <Typography variant="h5">CONTACT ME</Typography>
            <div className={classes.choices}>
              <span>Say Hello</span>
              <Radio
                value="Say Hi"
                checked={value === 'Say Hi'}
                color="primary"
                onChange={handlerChange}
              />
              <span>Get a Quote</span>
              <Radio
                value="Get a Quote"
                checked={value === 'Get a Quote'}
                color="primary"
                onChange={handlerChange}
              />
            </div>
          </div>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField fullWidth label="Your name" />

            <TextField fullWidth label="Your e-mail" />

            {value === 'Get a Quote' ? (
              <>
                <TextField fullWidth label="Needed Services" />

                <TextField fullWidth label="Estimated Budget" />
              </>
            ) : null}
            <TextField fullWidth label="Write a message" />
          </form>
          <Button variant="contained">Submit</Button>
        </Paper>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sectiondark: { background: '#fafafa', color: '#fff' },
  sectioncontent: {
    maxWidth: '80vw',
    border: '2px solid red',
  },
  titleandchoices: {
    '& h5': { marginTop: theme.spacing(1) },
  },
  paper: {
    background: 'tomato',
    marginTop: theme.spacing(4),
    color: '#fff',
    fontSize: '1.2rem',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(10),
    '& button': {
      backgroundColor: '#fff',
      color: 'tomato',
      fontWeight: 900,
      fontSize: '1.2rem',
      marginTop: theme.spacing(4),
    },
    '& button:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& input': { marginBottom: theme.spacing(1) },
  },
}));

export default Contact;
