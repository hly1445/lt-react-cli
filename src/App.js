import React, { Suspense } from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Routes from "./router"
export default function RouteConfigExample () {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          {Routes.map((route, i) => {
            return <RouteWithSubRoutes key={i} {...route} />
          })}
        </Switch>
      </Suspense>
    </Router>
  )
}
function RouteWithSubRoutes (route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => {
        document.title = route.title
        return (
          <route.component {...props} routes={route.routes} />
        )
      }}
    />
  );
}