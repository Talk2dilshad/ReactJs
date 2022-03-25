import React, { Component } from 'react';
import Main from './components/main_components';
import './App.css'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  
    render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;