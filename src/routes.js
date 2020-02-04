import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Main from './pages/main/main'
import Profile from './pages/profile/profile'

export default function src() {
  return (
    <Router>
        <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/profile/:user' exact component={Profile} />
        </Switch>
    </Router>
  );
}
