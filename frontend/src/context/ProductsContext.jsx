import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const requestProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
      setLoading(false);
      console.log(data);
    };
    requestProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
