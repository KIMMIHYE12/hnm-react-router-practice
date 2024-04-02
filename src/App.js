import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRaute from "./route/PrivateRaute";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<ProductAll />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<PrivateRaute />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
