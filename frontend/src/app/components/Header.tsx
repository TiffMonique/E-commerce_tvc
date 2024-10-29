'use client';
import React, { useState } from 'react';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { LuShoppingCart } from 'react-icons/lu';
import { VscAccount } from 'react-icons/vsc';
import CartDrawer from './ShoppingCart';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const goToLogin = () => {
    router.push('/login');
  };

  return (
    <>
      <nav className="border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 space-y-4 md:space-y-0">
          <a href="#" className="flex items-center rtl:space-x-reverse">
            <img src="/assets/TELEVICENTRO-LOGO.png" className="h-8" alt="Logo" />
            <span className="self-center text-lg whitespace-nowrap">SHOP</span>
          </a>

          <div className="relative flex flex-grow max-w-lg hidden md:flex md:order-2">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FiSearch className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full h-10 px-3 ps-12 text-sm text-gray-900 border rounded-full bg-gray-200 focus:ring-gray-500 focus:border-gray-500"
              placeholder="Buscar Productos"
            />
          </div>

          <div className="hidden md:flex md:w-auto md:order-1">
            <ul className="flex flex-row space-x-8 font-medium">
              <li>
                <a href="#" className="block py-2 text-gray-900 rounded hover:text-primary">Hogar</a>
              </li>
              <li>
                <a href="#" className="block py-2 text-gray-900 rounded hover:text-primary">Jardinería</a>
              </li>
              <li>
                <a href="#" className="block py-2 text-gray-900 rounded hover:text-primary">Electrodomésticos</a>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <button>
              <LuShoppingCart className="text-lg" />
            </button>
            <button onClick={goToLogin}>
              <VscAccount className="text-lg" />
            </button>
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-search"
              aria-expanded={isOpen}
            >
              <FiMenu />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4 md:order-3">
            <button onClick={toggleDrawer}>
              <LuShoppingCart className="text-lg" />
            </button>
            <button onClick={goToLogin}>
              <VscAccount className="text-lg" />
            </button>
          </div>
        </div>
      </nav>
      {isDrawerOpen && (
        <CartDrawer
          isOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
        />
      )}
    </>
  );
};

export default Header;
