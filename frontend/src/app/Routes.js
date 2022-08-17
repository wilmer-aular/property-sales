/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Layout } from "./layout/Layout";
import BasePage from "./BasePage";
import { PropertySales } from "./pages/PropertySales";

import { SignUp, SignIn } from "./pages";

import { LayoutProvider } from "./providers/LayoutProvider";

export function Routes() {
  const location = useLocation();
  const isAuthorized = true;
  return (
    <>
    {
      location.pathname === "/properties_sell" ?
      (
        <Route
          path="/properties_sell"
          component={PropertySales}
        />)
        :
        (
          <Switch>
            {!isAuthorized ? (
              /*Render auth page when user at `/auth` and not authorized.*/
              <Route path="/" component={SignIn} />
            ) : (
              /*Otherwise redirect to root page (`/`)*/
              <LayoutProvider>
                <Layout>
                  <BasePage />
                </Layout>
              </LayoutProvider>
            )}

            {/* <Route path="/registrar" component={SignUp} />
            */}
          </Switch>
        )
    }
     
    </>
  );
}
