import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Details from '../pages/Details';
import Home from '../pages/Home';

function Routes() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/details" component={Details} />
        </Switch>
    );
}

export default Routes;