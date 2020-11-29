import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { AuthContext } from '../auth/AuthContext';

import { PrivateRouter } from './PrivateRouter';
import { LoginPage } from '../components/login/LoginPage';
import { DashboardRouter } from './DashboardRouter';
import { PublicRouter } from './PublicRouter';


export const AppRouter = () => {

    const { user:{ isLogged } } = useContext(AuthContext);
    console.log(isLogged)

    return (
        <>
            <Router>
                <div>
                    <Switch>
                        <PublicRouter 
                            exact 
                            path='/login' 
                            component={ LoginPage } 
                            isAuth={ isLogged }
                        />

                        <PrivateRouter 
                            path='/' 
                            component={ DashboardRouter } 
                            isAuth={ isLogged }
                        />
                    </Switch>
                </div>
            </Router>
        </>
    )
}
