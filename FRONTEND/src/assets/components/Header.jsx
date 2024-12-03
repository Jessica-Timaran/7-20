import React from "react";

const Header = ({ username }) => {
  return (
    <header className="flex justify-end items-center p-4 bg-white shadow">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{username}</span>
        <div className="bg-gray-300 p-2 rounded-full">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
