import {IndexRoute, Route, Router, hashHistory} from 'react-router';
import Contents from './pages/Contents';
import Layout from './pages/Layout';
import React from 'react';
import ReactDOM from 'react-dom';
import Topic from './pages/Topic';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Contents}></IndexRoute>
      <Route path="topics/:topic" component={Topic}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
