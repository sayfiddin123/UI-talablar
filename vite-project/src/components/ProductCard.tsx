import React from "react";
import './Style.css'

interface ProductCardProps {
  name: string;
  price: number;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, category }) => {
  return (
    <div className=" shadow-md">
      <h3 className="text-lg">{name}</h3>
      <p className="text-sm ">{category}</p>
      <p className="text-md">${price}</p>
    </div>
  );
};

export default ProductCard;
