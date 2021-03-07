import React from 'react';
import './App.css';
import TrainersList from './TrainersList.js';

class App extends React.Component{
  render(){
    return (
      <div className="App">
          <h1>Trainers</h1>
          <TrainersList></TrainersList>
      </div>
      
    );
  
  }

}


export default App;
