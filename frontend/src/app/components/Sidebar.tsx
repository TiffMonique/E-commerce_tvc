'use client';
import React, { useState } from 'react';
import { BsCart3 } from "react-icons/bs";
import { MdAddCircleOutline } from 'react-icons/md';
import { RiBox3Line } from 'react-icons/ri';
import { IoClose, IoMenu } from "react-icons/io5";
import AddProduct from './AddProduct';
import { useProducts } from '../hooks/useProducts';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('orders');
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleAddProductModal = () => {
    setShowAddProductModal(!showAddProductModal);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { addProductFormik } = useProducts();

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
      </button>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-2 transition-transform bg-white shadow-md ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col h-full px-3 pb-4 overflow-y-auto bg-white">
          <div className="flex items-center mb-5 px-2 text-gray-900">
            <Image
              src="/assets/TELEVICENTRO-LOGO.png"
              width={50}
              height={50}
              alt="Televicentro Logo"
              className="h-auto w-auto max-w-[150px] max-h-[50px]"
            />
            <span className="font-bold text-lg ml-2">Administración</span>
          </div>

          <ul className="space-y-2 font-medium flex-grow">
            <li>
              <Link
                href="/admin"
                onClick={() => {
                  setActiveItem('orders');
                  setIsSidebarOpen(false);
                }}
                className={`flex items-center w-full p-2 rounded-lg ${activeItem === 'orders'
                  ? 'text-gray-900 bg-gray-100'
                  : 'text-gray-500 hover:bg-gray-100'
                  }`}
              >
                <BsCart3 />
                <span className="ml-3">Órdenes</span>
              </Link>
            </li>

            <div className="pt-5">
              <span className="px-2 text-xs text-gray-500 uppercase">
                PRODUCTOS
              </span>
            </div>

            <li>
              <button
                onClick={() => {
                  setActiveItem('addProduct');
                  toggleAddProductModal();
                  setIsSidebarOpen(false);
                }}
                className={`flex items-center w-full p-2 rounded-lg ${activeItem === 'addProduct'
                  ? 'text-gray-900 bg-gray-100'
                  : 'text-gray-500 hover:bg-gray-100'
                  }`}
              >
                <MdAddCircleOutline />
                <span className="ml-3">Agregar Producto</span>
              </button>
            </li>

            <li>
              <Link
                href="/admin/productList"
                onClick={() => {
                  setActiveItem('productList');
                  setIsSidebarOpen(false);
                }}
                className={`flex items-center w-full p-2 rounded-lg ${activeItem === 'productList'
                  ? 'text-gray-900 bg-gray-100'
                  : 'text-gray-500 hover:bg-gray-100'
                  }`}
              >
                <RiBox3Line />
                <span className="ml-3">Lista de Productos</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {showAddProductModal && (
        <AddProduct
          isOpen={showAddProductModal}
          toggle={toggleAddProductModal}
          addProductFormik={addProductFormik}
        />
      )}

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

