import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import GoogleLogin from 'react-google-login';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import UserForms from './components/pages/UserForms';
import StudentsList from './components/pages/StudentsList';


import { Login } from './components/login';
import { Logout } from './components/logout';
import { LoginHooks } from './components/loginhooks';
import { LogoutHooks } from './components/logouthooks';
import "bootstrap/dist/css/bootstrap.min.css";

import StudentOpportunities from './components/pages/StudentOpp/StudentOpportunities';





function App() {
  return <div className="App">
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component=
      {Home}/>
      <Route path='/userForms' component={UserForms}/>
      
      <Route path='/StudentsList' component={StudentsList}/>
      <Route path='/studentOpportunities' component={StudentOpportunities}/>

      <Route path='/opportunities' component={() => 
  { window.open('https://jerseycares.org', "_blank") 
  || window.location.replace('https://jerseycares.org');}
   }
   
   
   />
    </Switch>
    </Router>
    </div>
 
}


export default App;
