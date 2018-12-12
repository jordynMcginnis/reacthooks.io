import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import { SideBar } from './SideBar.js';
import { hookNames, getHook } from './hooks/index.js';

function App() {
  return (
    <Router>
      <div>
        {hookNames.map((hook)=>{
          let hookPath = `/${hook}`;
          return (
            <Route path={hookPath} exact component={SideBar} />
          )
        })}
      </div>
    </Router>
  );
}

export default App;