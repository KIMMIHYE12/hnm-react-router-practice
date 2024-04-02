import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  let { id } = useParams();
  const product = useSelector((state) => state.product.selectItem);
  const dispatch = useDispatch();
  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id));
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <div className='content_wrap'>
      <Container>
        <Row className='product_content'>
          <Col lg={5} className='product_detail_images'>
            <img src={product?.img} alt={`상품이미지 ${product?.title}`} />
          </Col>
          <Col lg={5}>
            <div className='product_detail_info'>
              <h1>{product?.title}</h1>
              <div className='price'>
                {product?.price.toLocaleString("ko-KR")}
              </div>
              <span className='conscious'>THE CONSCIOUS CHOICE</span>
              <span className='tit'>사이즈 선택</span>
              <div className='btn_size'>
                <button>S</button>
                <button>M</button>
                <button>L</button>
              </div>

              <button>추가하기</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
