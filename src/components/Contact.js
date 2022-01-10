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
              <span>Less</span>
              <Radio
                value="Less"
                checked={value === 'Less'}
                color="primary"
                onChange={handlerChange}
              />
              <span>More</span>
              <Radio
                value="More"
                checked={value === 'More'}
                color="primary"
                onChange={handlerChange}
              />
            </div>
          </div>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Your name"
              placeholder="Just for display"
            />

            <TextField
              fullWidth
              label="Your e-mail"
              placeholder="Just for display"
            />

            {value === 'More' ? (
              <>
                <TextField
                  fullWidth
                  label="Needed Services"
                  placeholder="Just for display"
                />

                <TextField
                  fullWidth
                  label="Estimated Budget"
                  placeholder="Just for display"
                />
              </>
            ) : null}
            <TextField
              fullWidth
              label="Write a message"
              placeholder="Just for display"
            />
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
  },
  titleandchoices: {
    '& h5': { marginTop: theme.spacing(1) },
  },
  paper: {
    background: '#CD853F',
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
