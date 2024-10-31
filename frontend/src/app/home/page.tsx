'use client';
import { useState } from "react";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";

export default function Home() {
  const { products } = useProducts();

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
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            category={product.category}
            quantity={product.quantity}
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
