import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import {SideBar} from './SideBar.js';


function App() {
  return (
    <Router>
      <div>
         <Route path="/" exact component={SideBar} />
      </div>
    </Router>
  );
}

export default App;