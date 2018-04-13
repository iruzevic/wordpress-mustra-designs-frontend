import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation/index.js';
import IndexPage from './pages';

const App = () => (
  <Router>
    <div>
      <Navigation position="header" />
      <Route exact path="/" component={IndexPage}/>
      <Route path="/:slug" component={IndexPage}/>
      <Route path="/:type/:slug" component={IndexPage}/>
    </div>
  </Router>
)

export default App;
