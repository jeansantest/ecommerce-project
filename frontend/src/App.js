import { Switch, Route } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <ProductsProvider>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </ProductsProvider>
  );
}

export default App;
