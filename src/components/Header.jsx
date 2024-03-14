import React from "react";

const Header = () => {
  return (
    <nav className="border-gray-200 bg-blue-500">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="trolley.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Offbuy
          </span>
        </a>
    </div>
    </nav>
  );
};

export default Header;
