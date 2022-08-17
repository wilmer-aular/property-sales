import React from "react";
import { Switch, Route } from "react-router-dom";
import { Properties, Home } from "./pages";

export default function BasePage() {
  return (
    //<Suspense fallback={<LayoutSplashScreen />}>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/properties" component={Properties} />
    </Switch>
    // </Suspense>
  );
}
