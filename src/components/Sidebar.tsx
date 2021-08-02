import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { logout } from "../api/auth";
import { User } from "../models/User";
import { AppState, useAppSelector } from "../store";
import Button from "./Button/Button";

interface Props {}

const Sidebar: React.FC<Props> = (props) => {

  const user = useAppSelector((state) => state.me);

  return (
    <div className="h-screen bg-gray-400 w-80">
      <div>This is sidebar</div>
      <div className="text-red-500">{user!.first_name}</div>
      <Button
        onClick={() => {
          logout();
          window.location.href = "/login";
        }}
      >
        Logout
      </Button>
    </div>
  );
};

Sidebar.defaultProps = {};

export default React.memo(Sidebar);
