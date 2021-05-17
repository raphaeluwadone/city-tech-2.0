import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Services from "../pages/Services";
export const ROUTES = [
    { path: "/home", key: "ROOT", exact: true, component: () => <Home /> },
    { path: "/about", key: "ROOT", exact: true, component: () => <About /> },
    { path: "/services", key: "ROOT", exact: true, component: () => <Services /> },
    { path: "/blog", key: "ROOT", exact: true, component: () => <Blog /> },
    { path: "/contact", key: "ROOT", exact: true, component: () => <Contact /> },
]

function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    );
  }
  
  export function RenderRoutes({ routes }) {
    return (
      <>
        <Switch>
          {routes.map((route, i) => {
            return <RouteWithSubRoutes key={route.key} {...route} />;
          })}
          <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
      </>
    );
  }