'use client'
import React, { useState } from 'react'
import { Order } from '../interfaces/orders';
import Pagination from './Pagination';
import { IoCaretDownCircleOutline } from 'react-icons/io5';
import { FiChevronDown } from 'react-icons/fi';


interface OrderTableProps {
  orders: Order[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  const totalItems = orders.length;
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    <>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs font-normal text-gray-400 uppercase border-b">
            <tr>
              <th scope="col" className="px-6 py-3">Order ID</th>
              <th scope="col" className="px-6 py-3">Creada</th>
              <th scope="col" className="px-6 py-3">Cliente</th>
              <th scope="col" className="px-6 py-3">Total</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.orderID} className="border-b">
                <td className="py-3 px-6">{order.orderID}</td>
                <td className="py-3 px-5">{order.createdAt}</td>
                <td className="py-3 px-5">{order.client}</td>
                <td className="py-3 px-5">${order.total.toFixed(2)}</td>
                <td className="py-3 px-5">
                  <div className="inline-flex items-center bg-yellow-100 text-primary text-xs px-2 py-1 rounded-lg">
                    <span>{order.status}</span>
                    <FiChevronDown className="ml-1 text-primary" />
                  </div>
                </td>

                <td className="py-3 px-5 flex items-center">
                  <div className='text-xl text-gray-400'>
                    <IoCaretDownCircleOutline />
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

export default OrderTable;