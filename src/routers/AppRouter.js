import React, { useEffect, useReducer } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import { PrivateRoute } from './PrivateRoute'
import { AuthContext } from '../auth/AuthContext'
import { authReducer } from '../auth/authReducer'
import { LoginScreen } from '../components/ui/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {logged: false}
}
export const AppRouter = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <>
    <AuthContext.Provider value={{user, dispatch}} > 
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={LoginScreen} />

            <PrivateRoute 
              path="/" 
              component={DashboardRoutes} 
              isAuthenticated={user.logged}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
    </>
  )
}
