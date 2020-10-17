import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import App from './App';
import { mainRoutes } from './routes'

render (
  <Router>
    <Switch>
      <Route path="/admin" render={(routeProps) => {
        return <App {...routeProps} />
      }} />
      {
        mainRoutes.map(route => {
          return <Route key={route.pathname} path={route.pathname} component={route.component} />
        })
      }
      <Redirect to="/admin" from="/" exact />
      <Redirect to="/404" />
    </Switch>
  </Router>,
  document.getElementById('root')
);
