import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>Links</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-secondary text-white border-0">
                <a href="/about" className="text-white text-decoration-none">
                  ABOUT US
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-secondary text-white border-0">
                <a href="/privacy" className="text-white text-decoration-none">
                  PRIVACY POLICY
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-secondary text-white border-0">
                <a
                  href="/advertise"
                  className="text-white text-decoration-none"
                >
                  ADVERTISE WITH US
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-secondary text-white border-0">
                <a href="/archives" className="text-white text-decoration-none">
                  ARCHIVES
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-secondary text-white border-0">
                <a href="/contact" className="text-white text-decoration-none">
                  CONTACT US
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4} className="mb-4">
            <h5>LoksewaHub</h5>
            <p>Your Partner in Public Service Exam Success!</p>
            <p>
              Email:{" "}
              <a
                href="mailto:helloloksewahub@gmail.com"
                className="text-white text-decoration-none"
              >
                helloloksewahub@gmail.com
              </a>
            </p>
            <p>Address: LoksewaHub, Kathmandu, Nepal</p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Social</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-secondary text-white border-0">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  Facebook
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-secondary text-white border-0">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  Twitter
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-secondary text-white border-0">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  Instagram
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-secondary text-white border-0">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  LinkedIn
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2024 loksewahub.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
