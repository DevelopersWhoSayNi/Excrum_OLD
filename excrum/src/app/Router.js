import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import UserCreateForm from '../user/userCreate/UserCreateForm';
const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route path="/register" component={UserCreateForm} />
      </div>
    </Router>
  );
};

export default Routes;
