'use client';
import React, { useState } from 'react';
import { BsCart3 } from "react-icons/bs";
import { MdAddCircleOutline } from 'react-icons/md';
import { RiBox3Line } from 'react-icons/ri';
import AddProduct from './AddProduct';
import { useProducts } from '../hooks/useProducts';
import Link from 'next/link';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('orders');
  const [showAddProductModal, setShowAddProductModal] = useState(false);


  const toggleAddProductModal = () => {
    setShowAddProductModal(!showAddProductModal);
  };

  const {
    addProductFormik
  } = useProducts();
  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/admin"
                onClick={() => setActiveItem('orders')}
                className={`flex items-center p-2 rounded-lg ${activeItem === 'orders' ? 'text-gray-900 bg-gray-100' : 'text-gray-500 hover:bg-gray-100'
                  }`}
              >
                <BsCart3 />
                <span className="ml-3">Órdenes</span>
              </Link>
            </li>

            <div className='pt-5'>
              <span className="px-2 text-xs text-gray-500 uppercase">
                PRODUCTOS
              </span>
            </div>

            <li>
              <a
                onClick={() => {
                  setActiveItem('addProduct');
                  toggleAddProductModal();
                }}
                className={`flex items-center p-2 rounded-lg ${activeItem === 'addProduct' ? 'text-gray-900 bg-gray-100' : 'text-gray-500 hover:bg-gray-100'
                  }`}
              >
                <MdAddCircleOutline />
                <span className="ml-3">Agregar Producto</span>
              </a>
            </li>

            <li>
              <a
                href="/admin/ProductList"
                onClick={() => setActiveItem('productList')}
                className={`flex items-center p-2 rounded-lg ${activeItem === 'productList' ? 'text-gray-900 bg-gray-100' : 'text-gray-500 hover:bg-gray-100'
                  }`}
              >
                <RiBox3Line />
                <span className="ml-3">Lista de Productos</span>
              </a>
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
    </>
  );
};

export default Sidebar;
