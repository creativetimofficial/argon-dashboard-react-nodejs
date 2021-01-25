import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const AuthRoutes = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        !(localStorage.getItem("token") && localStorage.getItem("user"))
            ? <Component {...props} />
            : <Redirect to='/admin/index' />
    )} />
);

export default AuthRoutes;
