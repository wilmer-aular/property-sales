import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Configuration, Workers, WorkerHours } from "./pages";

export default function BasePage() {
  return (
    //<Suspense fallback={<LayoutSplashScreen />}>
    <Switch>
      <Route path="/inicio" component={Home} />
      <Route path="/trabajadores" component={Workers} />
      <Route path="/control_de_horas" component={WorkerHours} />
      <Route path="/configuracion" component={Configuration} />
    </Switch>
    // </Suspense>
  );
}
