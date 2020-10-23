import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Details from '../pages/Details';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details/:login" component={Details} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Routes;