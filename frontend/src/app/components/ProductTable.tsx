'use client';
import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { HiOutlineTrash } from 'react-icons/hi';
import Pagination from './Pagination';
import { useProducts } from '../hooks/useProducts';


const ProductTable = () => {
  const { products } = useProducts();

  const totalItems = products.length;
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs font-normal text-gray-400 uppercase border-b">
            <tr>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">NOMBRE</th>
              <th scope="col" className="px-6 py-3">CATEGORÍA</th>
              <th scope="col" className="px-6 py-3">PRECIO</th>
              <th scope="col" className="px-6 py-3">DESCRIPCIÓN</th>
              <th scope="col" className="px-6 py-3">STOCK</th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr key={product.id} className="text-center border-b">
                <td className="py-3 px-4">{product.id}</td>
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">{product.category}</td>
                <td className="py-3 px-4">${product.price}</td>
                <td className="py-3 px-4">{product.description}</td>
                <td className="py-3 px-4">{product.quantity}</td>
                <td className="py-3 px-4">
                  <div className='flex items-center space-x-2'>
                    <button className="bg-primary text-xs text-white px-3 py-1 rounded-lg">
                      Ver Imagen
                    </button>
                    <button className='text-xl text-gray-500'>
                      <HiOutlineTrash />
                    </button>
                    <button className="text-lg text-gray-500">
                      <FiEdit />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          isAdmin={true}
        />
      </div>
    </>
  );
};

export default ProductTable;
