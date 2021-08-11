import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from '../App'
import { NavBar } from '../components/NavBar'

export const DashboardRoutes = () => {
  return (
    <>

      <NavBar />

      <div>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </div>
      
    </>
  )
}
