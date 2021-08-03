import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import AppContainerPageLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthLazy from "./pages/Auth/Auth.lazy";
import { LS_AUTH_TOKEN } from "./api/base";
import NotFoundPage from "./pages/NotFound.page";
import { User } from "./models/User";
import { me } from "./api";
import AppContext from "./App.context";
import { useDispatch, useSelector } from "react-redux";
import { uiSidebarToggle, meFetchAction, useAppSelector } from "./store";

interface Props {}

const App: React.FC<Props> = () => {
  const user = useAppSelector((state) => state.me);

  const dispatch = useDispatch();

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token) {
      return;
    }

    me().then((u) => dispatch(meFetchAction(u)));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(uiSidebarToggle(false));
    }, 8000);
  }, []);

  console.log("App is rendering");

  if (!user && token) {
    return <div>Loading...</div>;
  }

  return (
    <>
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
    </>
  );
};

export default App;
