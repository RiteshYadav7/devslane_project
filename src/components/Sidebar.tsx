import React from "react";
import { useAppSelector } from "../store";

interface Props {}

const Sidebar: React.FC<Props> = (props) => {
  const userFirstName = useAppSelector(
    (state) => state.users.byId[state.auth.id!].first_name
  );

  return (
    <div className="h-screen bg-gray-200 w-60">
      <div>This is sidebar</div>
      <div className="text-red-500">{userFirstName}</div>
    </div>
  );
};

Sidebar.defaultProps = {};

export default React.memo(Sidebar);
