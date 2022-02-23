import {
  AppBar,
  makeStyles,
  Toolbar,
  List,
  IconButton,
  Drawer,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import { Link, animateScroll as scroll } from 'react-scroll';
import React, { useState } from 'react';
import logo from '../images/logo_react.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BuildIcon from '@material-ui/icons/Build';
import WorkIcon from '@material-ui/icons/Work';
import EmailIcon from '@material-ui/icons/Email';
import ListIcon from '@material-ui/icons/List';
import CancelIcon from '@material-ui/icons/Cancel';

const links = [
  {
    id: 'about',
    text: 'About me',
    icon: <AccountCircleIcon fontSize="large" />,
  },
  { id: 'skills', text: 'Skills', icon: <BuildIcon fontSize="large" /> },
  { id: 'work', text: 'My Work', icon: <WorkIcon fontSize="large" /> },
  // { id: 'contact', text: 'Contact', icon: <EmailIcon fontSize="large" /> },
];

const scrollUp = () => {
  scroll.scrollToTop();
};

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img
            src={logo}
            className={classes.logo}
            alt="logo"
            onClick={scrollUp}
          ></img>
          <List className={classes.menu}>
            {links.map(({ id, text }, index) => (
              <Link
                key={index}
                to={id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {text}
              </Link>
            ))}
          </List>
          <IconButton
            edge="end"
            className={classes.menubutton}
            onClick={() => setOpen(true)}
          >
            <ListIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton
          onClick={() => setOpen(false)}
          className={classes.cancelButton}
        >
          <CancelIcon fontSize="large" />
        </IconButton>
        {/* <Divider /> */}
        {links.map(({ id, text, icon }, index) => (
          <Link
            className={classes.sidebar}
            key={index}
            to={id}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
          >
            <ListItem component="h5">
              <span>
                <ListItemIcon>{icon}</ListItemIcon>
              </span>
              {text}
            </ListItem>
          </Link>
        ))}
      </Drawer>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: { backgroundColor: '#fafafa', top: 0, left: 0, right: 0, zIndex: 999 },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    height: '4.3rem',
    width: 'auto',
    objectFit: 'contain',
    '&:hover': { cursor: 'pointer' },
  },
  menu: {
    [theme.breakpoints.down('sm')]: { display: 'none' },
    '& a': {
      color: '#333',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginLeft: theme.spacing(4),
    },
    '& a:hover': {
      cursor: 'pointer',
      color: '#30afd9',
      borderBottom: '3px solid blue',
    },
  },
  menubutton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      color: 'blue',
      position: 'absolute',
      top: 0,
      right: 100,
    },
  },
  sidebar: {
    width: '40vw',
    [theme.breakpoints.down('sm')]: { width: '60vw' },
    '& h5': {
      margin: theme.spacing(8, 0, 0, 0),
      fontSize: '1.4rem',
      color: '#333',
    },
    '& h5:hover': {
      cursor: 'pointer',
      color: '#30afd9',
      border: '3px solid',
    },
  },
  cancelButton: {
    color: 'tomato',
    position: 'absolute',
    right: 1,
  },
}));

export default Navbar;
