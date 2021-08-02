import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <div className="w-full pl-4 pr-2">
      <div className="flex">
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
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <h1 className="pl-4">
          <Link to="/dashboard">Dashboard</Link> / Sales
        </h1>
      </div>
    </div>
  );
};

Header.defaultProps = {};

export default React.memo(Header);
