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
        <Route path='/hooks' component={SideBar}/>
        <Route exact path='/hooks/:id' component={Hook}/>
        <Route exact path='/libraries' component={Libraries}/>
      </div>
    </Router>
  );
}

export default App;