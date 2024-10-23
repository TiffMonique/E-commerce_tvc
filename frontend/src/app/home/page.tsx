'use client';
import { useState } from "react";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = new Array(40).fill({
    title: "Mueble de Sala",
    price: "$145",
    imgSrc: "https://crudointerior.com/pub/media/catalog/product/cache/128028ae70ba7471bf5109a3d7607b1f/s/o/sofa_cafe_1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat purus, cursus sit amet inter dum ac, lobortis ac justo"
  });

  const totalItems = products.length;
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="mx-14 py-8">
      <h1 className="text-2xl font-bold mb-6">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            imgSrc={product.imgSrc}
            description={product.description}
          />
        ))}
      </div>

      <div className="border-t pb-4">
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          isAdmin={false}
        />
      </div>
    </div>
  );
}
