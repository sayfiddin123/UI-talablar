import { useState } from "react";
import { products } from "./data/Product";
import ProductList from "./components/ProductList";
import CategoryFilter from "./components/CAtegoryFilter";
import './components/Style.css'

const categories = ["All", "Laptop", "Phone", "Accessories", "Tablet"];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="p-6 space-y-4">
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );
}
