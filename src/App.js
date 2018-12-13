import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import { SideBar } from './SideBar.js';
import { Hook } from './Hook.js';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' component={SideBar}/>
        <Route exact path='/:id' component={Hook} />
      </div>
    </Router>
  );
}

export default App;