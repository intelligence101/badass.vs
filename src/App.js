import React, { Component } from 'react';
import l from './images/l.png'
import r from './images/r.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>BADASS</p>
        <p>Building Abstractions that are Deterministic And understanding them through Systems and Stories</p>
        <div className = 'polaroid'>
          <img src={l} alt='l'/>
          <img src={r} alt='r'/>
          <div className = 'container'>
            A Struggle of <span className = 'Left'>Left</span> and <span className='Right'>Right</span> Brain
          </div>
        </div>
      </div>
    );
  }
}

export default App;
