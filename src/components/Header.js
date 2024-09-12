import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AuthPopup from "./AuthPopup";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container className="bg-light">
        <Navbar.Brand href="/" className="fs-2">
          <img
            src={`${process.env.PUBLIC_URL}/lh-logo.png`}
            width="45"
            height="45"
            className="d-inline-block align-center"
            alt="Logo"
          />

          {"Loksewa Hub"}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/syllabus">Syllabus</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/quiz">Quiz</Nav.Link>

            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="/vacancies">Vacancies</NavDropdown.Item>
              <NavDropdown.Item href="questionsbank">
                Questions Bank
              </NavDropdown.Item>
              <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        {/* <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="/login">Mark Otto</a> <span /> <span />
            Not registered? <a href="/register"> SignUp</a>
          </Navbar.Text>
        </Navbar.Collapse> */}

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <AuthPopup />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
