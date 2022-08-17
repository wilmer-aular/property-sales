import React from "react";
import { Switch, Route } from "react-router-dom";
import { Properties } from "./pages";

export default function BasePage() {
  return (
    //<Suspense fallback={<LayoutSplashScreen />}>
    <Switch>
      <Route path="/properties/:userId" component={Properties} />
    </Switch>
    // </Suspense>
  );
}
