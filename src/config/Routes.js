import React from 'react';
import {Router, Route, hashHistory, IndexRoute, IndexRedirect} from 'react-router'
import Login from '../Login'
import RegistrationForm from '../RegistrationForm'
import App from '../App'
import Dashboard from '../Dashboard'



const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="/login" component={Login}/>
      <Route path="/registration" component={RegistrationForm}/>
      <Route path="/dashboard" component={Dashboard}/>
      </Route>
  </Router>
)

export default routes;
