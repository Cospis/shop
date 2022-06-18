import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
export default class Navbarc extends Component {
  render() {
    return (
      <>
        <div className="nav">
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand>Website</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="links"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to="/Home">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Abt">
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Contact">
                    Contact
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}
