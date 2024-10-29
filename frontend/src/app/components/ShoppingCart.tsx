'use client';

import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';

type CartItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
};

type CartDrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

const ShoppingCart: React.FC<CartDrawerProps> = ({ isOpen, toggleDrawer }) => {
  const items: CartItem[] = [
    {
      id: '1',
      name: 'Hogar',
      description: 'Mueble de Sala Tres Piezas',
      price: 145,
      quantity: 1,
      image: '/path-to-image.png',
    },
  ];

  //    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40">
          <div className="fixed top-0 right-0 h-full w-90 bg-white p-4 transform transition-transform duration-300">
            <div className="flex justify-between items-center mb-4">
              <button onClick={toggleDrawer} className="text-gray-500">
                <IoClose className="text-2xl" />
              </button>
              <h2 className="text-xl font-semibold">Carrito</h2>
              <LuShoppingCart className="text-lg text-bold" />
            </div>
            <div className='flex items-center justify-center'>
              <button className="px-10 py-2 mt-4 bg-yellow-500 rounded-full">
                Pagar
              </button>
            </div>

            <div className="mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-4 gap-6">
                  <img src={item.image} alt={item.name} className="w-24 h-24 rounded" />

                  <div className="flex-1 ml-4">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-md text-gray-500">{item.description}</p>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    {/* Cantidad y Controles de Flechas */}
                    <div className="flex items-center">
                      <span className="text-lg mr-2">{quantity}</span>
                      <div className="flex flex-col items-center -space-y-1.5">
                        <button onClick={increaseQuantity} className="text-gray-700 p-0 m-0">
                          <AiFillCaretUp />
                        </button>
                        <button onClick={decreaseQuantity} className="text-gray-700 p-0 m-0">
                          <AiFillCaretDown />
                        </button>
                      </div>
                    </div>

                    {/* Icono de papelera */}
                    <button className="text-red-500 hover:text-red-700">
                      <FiTrash2 size={20} />
                    </button>
                  </div>

                  <p className="text-lg font-bold">${item.price}</p>
                </div>

              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
