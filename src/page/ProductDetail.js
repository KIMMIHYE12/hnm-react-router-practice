import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const ProductDetail = () => {
  return (
    <Container>
      <Row className='product_content'>
        <Col lg={5} className='product_detail_images'>
          <img
            src='https://lp2.hm.com/hmgoepprod?set=source[/6d/87/6d87fdda0daf120760e12dc27fe12a7c7bfd8cfb.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]'
            alt='상품이미지'
          />
        </Col>
        <Col lg={5}>
          <div className='product_detail_info'>
            <h1>피티드 웨이스트 셔츠 드레스</h1>
            <div className='price'>₩ 79,900</div>
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
