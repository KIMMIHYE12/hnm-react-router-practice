import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/KIMMIHYE12/hnm-react-router-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, [product]);
  return (
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
            <Form.Select>
              <option>사이즈</option>
              <option value='1'>S</option>
              <option value='2'>M</option>
              <option value='3'>L</option>
            </Form.Select>
            <button>추가하기</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
