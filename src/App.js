import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./templates/Nav";
import Costumers from "./pages/Costumers";
import Orders from "./pages/Orders";
import Login from "./modules/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/costumers" element={<Costumers />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
