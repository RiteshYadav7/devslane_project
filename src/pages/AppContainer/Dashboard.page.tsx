import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { fetchGroups } from "../api/groups";
import UserData from "../../components/UserData";

import {fetchGroups, logout} from "../../api";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {

  return (
    <div>
      This is Dashboard Page.
      <Link to="/recordings">Go to recordings</Link>
      <UserData />
    </div>
  );
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
