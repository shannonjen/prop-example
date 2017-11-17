import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import Turkey from './Turkey'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello fname="Stephanie" lname="Baron"/>
        <Turkey food="Pez" utensil="fork" celebrity="Burl Ives" />
      </div>
    );
  }
}

export default App;
