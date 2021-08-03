import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { logout } from "../api";
import Avatar from "./Avatar/Avatar";
import { FiInbox, FiLock, FiLogOut, FiUser } from "react-icons/fi";

interface Props {}

const PopOver: React.FC<Props> = (props) => {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button>
            <Avatar />
          </Popover.Button>

          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute z-10 justify-center inline-flex right-5 w-36 px-2 py-2 rounded shadow-lg origin-top-right ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none bg-white">
              <div className="flex flex-col">
                
                  <Link to="/profile" className="flex py-2 items-center hover:text-blue-500">
                  <FiUser className="mr-2" />
                    Profile
                  </Link>
                
                <hr />
                
                  <Link to="/dashboard" className="text-sm flex py-2 items-center hover:text-blue-500">
                  <FiInbox className="mr-2" />
                    Inbox
                  </Link>
                
                <hr />
                  
                  <Link to="/dashboard" className="text-sm flex py-2 items-center hover:text-blue-500">
                  <FiLock className="mr-2" />
                    Lock Screen
                  </Link>
                <hr />
                  
                  <button
                    onClick={() => {
                      logout();
                      window.location.href = "/login";
                    }}
                    className="text-sm flex py-2 items-center hover:text-blue-500"
                  >
                    <FiLogOut className="mr-2" />
                    Sign Out
                  </button>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

PopOver.defaultProps = {};

export default React.memo(PopOver);
