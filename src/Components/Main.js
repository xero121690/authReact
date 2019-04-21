import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './aboutus';
import Contact from './contact';
import Team from './team';
import Login from './login';
import signup from './signup';
import ProtectedMain from './ProtectedMain'



const Main = (location) => (
  <Switch location={location}>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutus" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/team" component={Team} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={signup} />
    <PrivateRoute path='/' component={ProtectedMain} />
  </Switch>
)

export default Main;