import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './components/login/index.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
    </Router>
  );
}

export default RouterConfig;
