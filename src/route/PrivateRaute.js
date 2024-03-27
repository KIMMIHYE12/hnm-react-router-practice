import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";

const PrivateRaute = ({ authenticate }) => {
  return authenticate === true ? <ProductDetail /> : <Navigate to='/login' />;
};

export default PrivateRaute;
