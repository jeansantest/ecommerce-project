import React from 'react';
import Loading from '../components/Loading';
import ProductItem from '../components/ProductItem';
import { useProducts } from '../context/ProductsContext';

function Home() {
  const { products, loading, error } = useProducts();
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : error ? (
        <p>{error}</p>
      ) : (
        products.map((e, i) => <ProductItem product={e} key={i} />)
      )}
    </div>
  );
}

export default Home;
