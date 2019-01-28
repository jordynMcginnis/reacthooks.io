import React from 'react';
import { Route, withRouter, Redirect } from "react-router-dom";
import './index.css';
import Sidebar from './Sidebar.js';
import Hook from './Hook.js';
import Nav from './Nav.js';
import Libraries from './Libraries.js';
import Tutorials from './Tutorials'
import Footer from './Footer'



function App(props) {
  if (props.location.pathname === '/') {
    return <Redirect to='/hooks/useArray' />
  }

  return (
    <div className='app'>
      <Nav />
      <React.Fragment>
        <Route path='/tutorials' exact component={Tutorials}/>
        <div className='hooks-container'>
          <Route path='/hooks' component={Sidebar}/>
          <Route exact path='/hooks/:id' component={Hook}/>
        </div>
        <Route exact path='/libraries' component={Libraries}/>
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default withRouter(App);