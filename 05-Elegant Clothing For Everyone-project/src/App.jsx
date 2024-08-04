
import Product from './components//Product.jsx';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import CartContexProvider from './store/Store-shopping-cart.jsx';
function App() {

  return (
    <CartContexProvider>
      <Header/>
      <Shop>
      {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
      </CartContexProvider>
  );
}

export default App;
