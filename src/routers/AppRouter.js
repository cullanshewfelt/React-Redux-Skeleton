import React, { lazy, Suspense} from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch} from 'react-router-dom';
import Header from '../components/SubComponents/Header/Header';
import Footer from '../components/SubComponents/Footer/Footer';

import Dashboard from '../components/Dashboard/Dashboard';
import Contact from '../components/Contact/Contact';


import Loader from '../components/SubComponents/Loader';

// the router handles client side rendering of routes
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route path='/' component={Dashboard} exact={true}/>
          <Route path='/Contact' component={Contact} exact={true}/>

        </Switch>
      </Suspense>
      <Route children={Footer}/>
    </div>
  </BrowserRouter>
);

export default AppRouter;
