/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { Layout } from "./layout/Layout";
import BasePage from "./BasePage";
import { getUser } from '../services';
import { PropertySales } from "./pages/PropertySales";

import { SignUp, SignIn } from "./pages";

import { LayoutProvider } from "./providers/LayoutProvider";

export function Routes() {
  const location = useLocation();
  const user = getUser();
  
  const isAuthorized = user !== null && user !== undefined;
  return (
    <>
    {
      location.pathname === "/" ? <Route path="/" component={PropertySales}/> :
        (
          <Switch>
              <Route path="/auth" component={SignIn}/>
              <Route path="/register" component={SignUp} />
            {!isAuthorized ? (
              /*Render auth page when user at `/auth` and not authorized.*/
              <>
                <Redirect to="/auth"/>
                </>
            ) : (
              /*Otherwise redirect to root page (`/`)*/
              <LayoutProvider>
                <Layout>
                  <BasePage />
                </Layout>
              </LayoutProvider>
            )}
          </Switch>
        )}
    </>
  );
}
