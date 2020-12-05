import NavBar from "./components/NavBar";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { ProductItem } from "./components/ProductItem";

const { Routes, Route } = require("react-router-dom");

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='products'>
          <Products />
          <Route path=':shoeId'><ProductItem/></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
