import React from "react";
import ProductCard from "./ProductCard";
import './Style.css'

interface ProductListProps {
  products: { id: number; name: string; price: number; category: string }[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;