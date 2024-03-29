import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRaute from "./route/PrivateRaute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log("로그인", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <div>
        <Routes>
          <Route path='/' element={<ProductAll />} />
          <Route
            path='/login'
            element={<Login setAuthenticate={setAuthenticate} />}
          />
          <Route
            path='/product/:id'
            element={<PrivateRaute authenticate={authenticate} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
