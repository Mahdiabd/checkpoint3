import React, { Component } from 'react';
import delpiero from './delpiero.jpg';
import './App.css';
import Box from './component/Juv';


class App extends Component {
  render() {
    return (
      <div>
        <Box name='Delpiero' des="Number 10" img="./delpiero.jpg"/>
        <Box name='part time' des="lorem2"/>
        <Box name='kids' des="lorem3"/>
        <Box name='summer' des="lorem4"/>
      </div>
    );
  }
}
export default App;