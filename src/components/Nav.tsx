import React, { useState } from "react";
import { HiBell, HiMail, HiSearch } from "react-icons/hi";
import Header from "./Header";
import PopOver from "./PopOver";

interface Props {}

const Nav: React.FC<Props> = (props) => {
  return (
    <div className="sticky top-0">
      <div className="bg-gray-900 h-14">
        <div className="flex justify-between py-2.5 items-center">
          <div className="flex">
            <div>
              <h1 className="text-white text-2xl ml-8 mr-12">DEVS</h1>
            </div>
            <div className="flex bg-gray-800 items-center rounded-md">
              <div className="mx-2">
                <HiSearch />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 rounded-md w-80 h-8"
              />
            </div>
          </div>

          <div className="flex">
            <button type="button">
              <HiMail className="text-white w-6 h-6 ml-5" />
            </button>
            <button type="button">
              <HiBell className="text-white w-6 h-6 ml-4" />
            </button>

            <div className="h-6 w-6 ml-4 mr-5">
              <button type="button">
                <PopOver />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

Nav.defaultProps = {};

export default React.memo(Nav);
