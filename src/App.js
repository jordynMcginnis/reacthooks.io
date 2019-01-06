import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import { SideBar } from './SideBar.js';
import { Hook } from './Hook.js';
import { Nav } from './Nav.js';
import { Libraries } from './Libraries.js';

function App() {
  return (
    <Router>
      <div className='app'>
        <Route path='/' component={Nav}/>
        <Route exact path='/home' component={SideBar}/>
        <Route exact path='/libraries' component={Libraries}/>
        <Route exact path='/hooks/:id' component={Hook}/>
      </div>
    </Router>
  );
}

export default App;