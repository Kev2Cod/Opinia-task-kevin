import React from "react";
import { Navbar, Container, Form, Nav, NavDropdown } from "react-bootstrap";

import LogoOpinia from "../../assets/icon/brand-opinia.png";
import IconSearch from "../../assets/icon/icon-search.png";
import IconHome from "../../assets/icon/icon-home.png";
import IconChat from "../../assets/icon/icon-chat.png";
import IconPersons from "../../assets/icon/icon-person.png";
import IconBell from "../../assets/icon/icon-bell.png";
import Profile from "../../assets/image/profile-1.jpg";

// CSS
import "./navbar.css";

export default function NavbarUser() {
  return (
    <>
      <Navbar className="navbar-container">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={LogoOpinia} alt="Brand Opinia" height={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Form className="d-flex search-navbar justify-content-center">
            {/* <FormControl type="search" placeholdergh="Search" className="me-2" aria-label="Search" /> */}
            <div className="d-flex align-items-center">
              <input type="text" className="input-search" placeholder="Search" />
              <img src={IconSearch} alt="search" className="icon-search" />
            </div>
          </Form>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <div className="nav-button">
                  <img src={IconHome} alt="Link" width={18} />
                </div>
              </Nav.Link>

              <Nav.Link href="#link">
                <div className="nav-button">
                  <img src={IconPersons} alt="Link" width={18} />
                </div>
              </Nav.Link>

              <Nav.Link href="#link">
                <div className="nav-button">
                  <img src={IconChat} alt="Link" width={18} />
                </div>
              </Nav.Link>

              <Nav.Link href="#link">
                <div className="nav-button notif">
                  <img src={IconBell} alt="Link" width={18} />
                </div>
              </Nav.Link>

              <Nav.Link href="#link">
                <div>
                  <img src={Profile} alt="Link" className="nav-profile" />
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
