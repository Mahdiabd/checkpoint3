import React, { Component } from 'react';
import delpiero from './delpiero.jpg';
import './App.css';
import Box from './component/Juv';


class App extends Component {
  render() {
    return (
      <div className="test">
    
         <h1 className="header" >Juventus</h1>
         <div className="test-part">
         <span><Box  name='Delpiero' des="El Capitano" img="./delpiero.jpg"/></span>
         <span> <Box name='Buffon' des="The Spider" img="./buffon.jpg"/></span>
         <span><Box name='Nedved' des="Golden Boy" img="./nedved.jpg"/> </span>
         <span> <Box name='Chiellini' des="Go Gorilla" img="./chiellini.jpg"/></span>
        </div>
      </div>
    );
  }
}
export default App;