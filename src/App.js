import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import Turkey from './Turkey'
import People from './People'

const peopleData = [
  { id: 1, name: "Sam"},
  { id: 2, name: "Banu"}
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello fname="Stephanie" lname="Baron"/>
        <Turkey food="Pez" utensil="fork" celebrity="Burl Ives" />
        <People people={ peopleData } />
      </div>
    );
  }
}

export default App;
