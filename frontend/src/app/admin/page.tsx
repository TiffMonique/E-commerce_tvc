'use client';
import React from 'react'
import OrderTable from '../components/OrderTable'
import Card from '../components/Card';

const page = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold pl-8 sm:pl-0">Órdenes</h1>
        <div className="w-7 h-7 rounded-full bg-yellow-400 relative">
          <span className="absolute right-0 bottom-0 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
        </div>
      </div>
      <div className='space-y-4 pt-8'>
        <ul className="flex flex-wrap text-sm font-medium text-center border-b border-gray-200">
          <li className=''>
            <a aria-current="page" className="inline-block p-2 active border-b-2 text-secondary border-secondary bg-gray-100">Pendientes</a>
          </li>
        </ul>
        <Card>
          <OrderTable />
        </Card>
      </div>
    </>
  )
}

export default page