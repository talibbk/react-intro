import React,{ Component } from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Hobby from './components/Hobby';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render(){
    return (
      
      <React.Fragment>
          <NavBar />
          <AboutMe />
          <Hobby />

      </React.Fragment>

    );
  }
}

export default App;
