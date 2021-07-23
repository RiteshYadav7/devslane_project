import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../api";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchGroups({ status: "all-groups", query: query });
  }, [query]);

  return (
    <div>
      This is Dashboard Page.
      <Link to="/recordings">Go to recordings</Link>
    </div>
  );
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
