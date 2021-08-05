import React from "react";
import { meSelector } from "../selectors/auth.selectors";
import { useAppSelector } from "../store";

interface Props {}

const Sidebar: React.FC<Props> = (props) => {
  const user = useAppSelector(meSelector);

  return (
    <div className="h-screen bg-gray-200 w-60">
      <div>This is sidebar</div>
      <div className="text-red-500">{user!.first_name}</div>
    </div>
  );
};

Sidebar.defaultProps = {};

export default React.memo(Sidebar);
