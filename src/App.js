import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<ProductAll />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<ProductDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
