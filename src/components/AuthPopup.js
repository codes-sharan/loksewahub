import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AuthPopup = () => {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isLogin ? "Login" : "Sign Up"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {!isLogin && (
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>
            )}

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="success" type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" onClick={toggleForm}>
            {isLogin
              ? "Need an account? Sign Up"
              : "Already have an account? Login"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AuthPopup;
