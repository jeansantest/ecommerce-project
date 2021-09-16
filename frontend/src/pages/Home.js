import React from 'react';
import ProductItem from '../components/ProductItem';
import { useProducts } from '../context/ProductsContext';

function Home() {
  const { products, loading } = useProducts();
  return (
    <div className="App">
      {loading ? (
        <h1>Espere, está carregando</h1>
      ) : (
        products.map((e) => <ProductItem product={e} />)
      )}
    </div>
  );
}

export default Home;
