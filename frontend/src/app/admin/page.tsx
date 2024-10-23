import React from 'react'
import OrderTable from '../components/OrderTable'
import Card from '../components/Card';


// mockOrders.ts
const mockOrders = [
  {
    orderID: "ORD001",
    createdAt: "2024-10-20",
    client: "Juan Pérez",
    total: 150.00,
    status: "Completado",
  },
  {
    orderID: "ORD001",
    createdAt: "2024-10-20",
    client: "Juan Pérez",
    total: 150.00,
    status: "Completado",
  },
  {
    orderID: "ORD001",
    createdAt: "2024-10-20",
    client: "Juan Pérez",
    total: 150.00,
    status: "Completado",
  },
  {
    orderID: "ORD001",
    createdAt: "2024-10-20",
    client: "Juan Pérez",
    total: 150.00,
    status: "Completado",
  },
  {
    orderID: "ORD001",
    createdAt: "2024-10-20",
    client: "Juan Pérez",
    total: 150.00,
    status: "Completado",
  },

  {
    orderID: "ORD001",
    createdAt: "2024-10-20",
    client: "Juan Pérez",
    total: 150.00,
    status: "Completado",
  },

];

const page = () => {
  return (
    <div className='space-y-4'>
      <ul className="flex flex-wrap text-sm font-medium text-center border-b border-gray-200">
        <li className=''>
          <a aria-current="page" className="inline-block p-2 active border-b-2 text-secondary border-secondary bg-gray-100">Pendientes</a>
        </li>
      </ul>
      <Card>
        <OrderTable orders={mockOrders} />
      </Card>
    </div>
  )
}

export default page