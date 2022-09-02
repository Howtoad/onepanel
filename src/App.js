import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./templates/Nav";
import Costumers from "./pages/Costumers";
import Orders from "./pages/Orders";
import Login from "./modules/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import TokenContext from "./context/TokenContext";

function App() {
  const [token, setToken] = useState(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
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
    </TokenContext.Provider>
  );
}

export default App;
