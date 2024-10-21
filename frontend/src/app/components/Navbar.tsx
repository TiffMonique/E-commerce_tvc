import React from 'react';
import UserMenu from './UserMenu';
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <Image
                src="/assets/TELEVICENTRO-LOGO.png"
                width={50}
                height={50}
                alt="Televicentro Logo"
                className="h-auto w-auto max-w-[150px] max-h-[50px]"
              />
              <span className="text-gray-800 text-lg">Administración</span>
            </div>
          </div>
          <UserMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
