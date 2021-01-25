import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem("token") && localStorage.getItem("user")
            ? <Component {...props} />
            : <Redirect to='/auth/login' />
    )} />
);

export default PrivateRoute;
