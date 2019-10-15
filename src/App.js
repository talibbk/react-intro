import React,{ Component } from 'react';
import NavBar from './components/NavBar';
import Grid from '@material-ui/core/Grid';
import AboutMe from './components/AboutMe';
import './App.css';

class App extends Component {
  render(){
    return (
      
      <React.Fragment>
        <Grid>
          <NavBar />
        </Grid>
        <Grid>
          <AboutMe />
        </Grid>
      </React.Fragment>

    );
  }
}

export default App;
