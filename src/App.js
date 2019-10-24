import React,{ Component } from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Hobby from './components/Hobby';
import Footer from './components/Footer';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fab)



class App extends Component {
  render(){
    return (
      
      <React.Fragment>
          <NavBar />
          <AboutMe />
          <Hobby />
          <Footer />

      </React.Fragment>

    );
  }
}

export default App;
