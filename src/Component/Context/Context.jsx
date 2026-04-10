import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]); // المنتجات من API
  const [cart, setCart] = useState([]);        // المنتجات اللي اتضافت للكارت

  // دالة لإضافة منتج للكارت
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <ProductsContext.Provider value={{ products, setProducts, cart, addToCart }}>
      {children} 
    </ProductsContext.Provider>
  );
}