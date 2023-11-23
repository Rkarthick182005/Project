import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './style.css';
import Home from './views/home';
import Hom from './Hom';
import Reg from './Reg';
import NotFound from './views/not-found';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Hom" component={Hom} />
        <Route path="/Reg" component={Reg} />
        {/* If none of the above routes match, redirect to the not-found page */}
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
