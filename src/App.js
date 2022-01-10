import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from '@material-ui/core';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: { primary: { main: purple[400] }, secondary: { main: '#333' } },
});

function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar id="" />
        <About title="About Me" id="about" dark={true} />
        <Skills title="Skill" id="skills" dark={false} />
        <MyWork title="My Work" id="work" dark={true} />
        <Contact title="Get in touch" id="contact" dark={false} />
      </div>
    </MuiThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({ root: {} }));

export default App;
