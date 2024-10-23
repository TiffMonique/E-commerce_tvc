import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";

interface CardProps {
  title: string;
  price: string;
  imgSrc: string;
  description?: string;
}

const ProductCard: React.FC<CardProps> = ({ title, price, description, imgSrc }) => {
  return (
    <div className="">
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <div className="">
        <div className="flex justify-between items-center pt-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-lg font-semibold">{price}</span>
        </div>
        <p className="my-2 text-normal leading-tight text-sm">
          {description || "Descripción no disponible"}
        </p>

        <div className="w-full">
          <button className="flex items-center justify-center bg-add text-white py-1 px-4 rounded-lg hover:bg-gray-00 w-full">
            <IoAddCircleOutline className="mr-2" />
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
