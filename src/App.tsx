import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import AppContainerPageLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthLazy from "./pages/Auth/Auth.lazy";
import { LS_AUTH_TOKEN } from "./api/base";
import NotFoundPage from "./pages/NotFound.page";
import { me } from "./middlewares/auth.middleware";
import { useAppSelector } from "./store";
import { meSelector } from "./selectors/auth.selectors";

interface Props {}

const App: React.FC<Props> = () => {
  const user = useAppSelector(meSelector);

  // const dispatch = useDispatch();

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token) {
      return;
    }

    me();
  }, []); // eslint-disable-line

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
