import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import { User } from "../../models/User";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import ProfilePage from "./Profile.page";
import RecordingsPage from "./Recordings.page";

interface Props {}

const AppContainer: React.FC<Props> = (props) => {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="flex flex-row">
        <Sidebar/>
        <Switch>
          <Route path="/dashboard">
            <DashboardPage></DashboardPage>
          </Route>
          <Route path="/recordings">
            <RecordingsPage></RecordingsPage>
          </Route>
          <Route path="/batch/:batchNumber/lecture/:lectureNumber">
            <LecturePage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      </div>
    </>
  );
};

AppContainer.defaultProps = {};

export default React.memo(AppContainer);
