import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import AppContainerPageLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthLazy from "./pages/Auth/Auth.lazy";
import { LS_AUTH_TOKEN } from "./api/base";
import NotFoundPage from "./pages/NotFound.page";
import { User } from "./models/User";
import { me } from "./api";
import AppContext from "./App.context";

interface Props {}

const App: React.FC<Props> = () => {
  const [user, setUser] = useState<User>();

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token) {
      return;
    }

    me().then((u) => setUser(u));
  }, [token]);

  console.log("App rendering and token is " + token);

  if (!user && token) {
    return <div>Loading...</div>;
  }

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Suspense fallback={<div className="text-red-500">Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/login", "/signup"]} exact>
              {user ? <Redirect to="/dashboard" /> : <AuthLazy />}
            </Route>
            <Route
              path={[
                "/dashboard",
                "/recordings",
                "/batch/:batchNumber/lecture/:lectureNumber",
              ]}
              exact
            >
              {user ? <AppContainerPageLazy /> : <Redirect to="/login" />}
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </AppContext.Provider>
  );
};

export default App;
