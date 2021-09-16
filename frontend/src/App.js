import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './components/ProductItem';
import './App.css';

function App() {
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
    <div className="App">
      {loading ? (
        <h1>Espere, está carregando</h1>
      ) : (
        products.map((e) => <ProductItem product={e} />)
      )}
    </div>
  );
}

export default App;
