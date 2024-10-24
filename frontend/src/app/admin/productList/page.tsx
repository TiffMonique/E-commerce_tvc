'use client';
import Card from '@/app/components/Card';
import ProductTable from '@/app/components/ProductTable'
import React from 'react'

const products = [
  {
    id: "A151",
    name: "Sofá de Tres Piezas",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,
    image: "url-del-imagen-1"
  },
  {
    id: "A151",
    name: "vgsdfdsbhgsdfg",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,

    image: "url-del-imagen-1"
  },
  {
    id: "A151",
    name: "sfge",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,

    image: "url-del-imagen-1"
  },
  {
    id: "A151",
    name: "wwwwwwwwwww",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,
    image: "url-del-imagen-1"
  },
  {
    id: "A151",
    name: "Sofá de Tres Piezas",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,
    image: "url-del-imagen-1"
  }, {
    id: "A151",
    name: "Sofá de Tres Piezas",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,
    image: "url-del-imagen-1"
  },
  {
    id: "A151",
    name: "Sofá de Tres Piezas",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,
    image: "url-del-imagen-1"
  },
  {
    id: "A151",
    name: "Sofá de Tres Piezas",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,
    image: "url-del-imagen-1"
  },
  {
    id: "A151",
    name: "Sofá de Tres Piezas",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,
    image: "url-del-imagen-1"
  },
  {
    id: "A151",
    name: "Sofá de Tres Piezas",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,
    image: "url-del-imagen-1"
  },
  {
    id: "A151",
    name: "Sofá de Tres Piezas",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,
    image: "url-del-imagen-1"
  },
  {
    id: "A151",
    name: "Sofá de Tres Piezas",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,
    image: "url-del-imagen-1"
  },
  {
    id: "A151",
    name: "Sofá de Tres Piezas",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,
    image: "url-del-imagen-1"
  },
  {
    id: "A151",
    name: "Sofá de Tres Piezas",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,
    image: "url-del-imagen-1"
  },
  {
    id: "A151",
    name: "Sofá de Tres Piezas",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,
    image: "url-del-imagen-1"
  },
  {
    id: "A151",
    name: "Sofá de Tres Piezas",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,
    image: "url-del-imagen-1"
  },
  {
    id: "A151",
    name: "Sofá de Tres Piezas",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,
    image: "url-del-imagen-1"
  }, {
    id: "A151",
    name: "Sofá de Tres Piezas",
    category: "Sala",
    price: 145,
    description: "Sofá Café para Sala",
    stock: 250,
    quantity: 0,
    image: "url-del-imagen-1"
  },

];
const page = () => {
  return (
    <div className='space-y-4'>
      <ul className="flex flex-wrap text-sm font-medium text-center border-b border-gray-200">
        <li className=''>
          <a aria-current="page" className="inline-block p-2 active border-b-2 text-secondary border-secondary bg-gray-100">Todos los Productos</a>
        </li>
      </ul>
      <Card>
        <ProductTable products={products} />
      </Card>
    </div>
  )
}

export default page