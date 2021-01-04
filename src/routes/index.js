import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Forgot from '../pages/Forgot';
import Dashboard from '../pages/Dashboard';
import ClientList from '../pages/ClientList';
import ServerList from '../pages/ServerList';
import PlanList from '../pages/PlanList';
import RegisterCustomers from '../pages/RegisterCustomers';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/forgot" component={Forgot} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/clientsList" component={ClientList} />
    <Route path="/serversList" component={ServerList} />
    <Route path="/plansList" component={PlanList} />
    <Route path="/registerCustomers" component={RegisterCustomers} />
  </Switch>
);

export default Routes;
