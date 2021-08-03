import React from "react";
import { Link } from "react-router-dom";
import UserData from "../../components/UserData";

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
