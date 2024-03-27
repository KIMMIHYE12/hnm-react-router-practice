import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className='product_item' onClick={showDetail}>
      <div className='image_container'>
        <img src={item?.img} alt='상품이미지' />
        <div
          className={`label_conscious ${
            item?.choice === true ? "" : "none_conscious"
          }`}
        >
          THE CONSCIOUS CHOICE
        </div>
      </div>
      <div className='item_details'>
        <div className='item_heading'>{item?.title}</div>
        <div className='item_price'>₩{item?.price.toLocaleString("ko-KR")}</div>
        <div className='new_product'>{item?.new === true ? "신제품" : ""}</div>
      </div>
    </div>
  );
};

export default ProductCard;
