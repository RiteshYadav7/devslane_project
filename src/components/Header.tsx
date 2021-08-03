import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import PopOver from "./PopOver";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <div className="px-6 h-14 flex justify-between bg-gray-50">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="cursor-pointer"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <h1 className="pl-4">
          <Link to="/dashboard">Dashboard</Link> / Sales
        </h1>
      </div>
      <div className="py-2">
        <DropDown />
      </div>
    </div>
  );
};

Header.defaultProps = {};

export default React.memo(Header);
