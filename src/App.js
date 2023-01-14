import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import PortfolioContainer from './container/PortfolioContainer';

function App() {
  return (
    <div id='background'>
      <div id='background2'>
        <div>
          <PortfolioContainer />

        </div>
      </div>

    </div>
  );
}

export default App;


// className="App" style={{
//   backgroundImage: `url('dessertbg.jpg')`,
//   backgroundRepeat: `repeat`,
//   backgroundSize: `contain`,
//   height: `100%`,
//   backgroundPosition: `center`
// }}