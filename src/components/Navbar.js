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
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Aboutus";
import Home from "./Home";
import ContactUs from "./Contactus";
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
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to="/Home">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Abt">
                    About Us
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Contact">
                    Contact Us
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
        <div className="pagecontent">
          <Routes>
            <Route path="/Contact" element={<ContactUs />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Abt" element={<AboutUs />} />
          </Routes>
        </div>
      </>
    );
  }
}
