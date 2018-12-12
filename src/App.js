import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import { SideBar } from './SideBar.js';
import { hookNames, getHook } from './hooks/index.js';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/:id' component={Hook} />
      </div>
    </Router>
  );
}

export default App;