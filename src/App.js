import NavBar from "./components/NavBar";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { ProductItem } from "./components/ProductItem";
import { ShoppingCart } from "./components/ShoppingCart";
import "bootstrap/dist/css/bootstrap.min.css";

const { Routes, Route } = require("react-router-dom");

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="products">
          <Products />
          <Route path=":shoeId">
            <ProductItem />
          </Route>
        </Route>
        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
