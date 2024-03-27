import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <Container>
      <Form className='login_content' onSubmit={(event) => loginUser(event)}>
        <Form.Group
          as={Row}
          className='mb-3 login_field'
          controlId='formPlaintextEmail'
        >
          <Form.Label column sm='1'>
            이메일
          </Form.Label>
          <Col sm='3'>
            <Form.Control type='email' placeholder='name@example.com' />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className='mb-3 login_field'
          controlId='formPlaintextPassword'
        >
          <Form.Label column sm='1'>
            비밀번호
          </Form.Label>
          <Col sm='3'>
            <Form.Control type='password' placeholder='Password' />
          </Col>
        </Form.Group>
        <Row className='btn_login_content'>
          <Col sm='4'>
            <button type='submit'>로그인</button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Login;
