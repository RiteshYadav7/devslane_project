import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/Auth.page";
import AppContainerPage from "./pages/AppContainer.page";
import NotFoundPage from "./pages/NotFound.page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact>
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path={["/login", "/signup"]} exact>
            <AuthPage />
          </Route>
          <Route path={["/dashboard", "/recordings", "/batch/:batchNumber/lecture/:lectureNumber"]} exact>
            <AppContainerPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
