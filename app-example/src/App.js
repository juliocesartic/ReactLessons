import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import PersonClass from './Person/PersonClass'

class App extends Component {
  render(){
    return (
      <div className="App">
        <h3>This is a component called App</h3>
        <Person name="Julio" age="25"/>
        <Person name="Sarah" age="21"/>
        <Person name="Israel" age="26">This is my teacher!</Person>
        <Person name="Melissa" age="26"/>
        <Person name="Freddy" age="35"/>
        <Person name="Cristian" age="30"/>
        <PersonClass></PersonClass>
      </div>


    )
    //return React.createElement('div', {className: "app"}, React.createElement('h3', null, "This is a component called App2"))
  }
}

export default App;
