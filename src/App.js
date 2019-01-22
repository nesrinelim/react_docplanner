import React, { Component } from 'react';

import './App.css';
import Navbar1 from './navbar'
import Section1 from'./section1';
import Liste1 from './liste1';
import Section2 from './section2';
import Section3 from './section3'
import Liste3 from './liste3';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar1 />
       <Section1/>
       <Liste1/>
       <Section2/>
       <Section3 />
       <Liste3 />
       <Footer/>
      </div>
    );
  }
}

export default App;
