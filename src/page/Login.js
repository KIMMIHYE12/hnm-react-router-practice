import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = (event) => {
    event.preventDefault();
    dispatch(authenticateAction.login(id, password));
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
          <Form.Label column lg='1' md='2' sm='2'>
            이메일
          </Form.Label>
          <Col md='4' sm='6'>
            <Form.Control
              type='email'
              placeholder='name@example.com'
              onChange={(event) => setId(event.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className='mb-3 login_field'
          controlId='formPlaintextPassword'
        >
          <Form.Label column lg='1' md='2' sm='2'>
            비밀번호
          </Form.Label>
          <Col md='4' sm='6'>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={(event) => setPassword(event.target.value)}
            />
          </Col>
        </Form.Group>
        <Row className='btn_login_content'>
          <Col lg='5' md='6' sm='8'>
            <button type='submit'>로그인</button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Login;
