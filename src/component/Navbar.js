import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
const Navigationbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <div className="all">
            <Navbar.Brand>
              <div style={{display:"flex", alignItems:"center"}}>
                <div>
                  <Link to="/">
                    <img
                      src="https://rekreartive.com/wp-content/uploads/2019/03/Logo-Lampung-Timur-Warna.png"
                      alt=""
                      width={50}
                    />
                  </Link>
                </div>
                <div style={{paddingLeft:"20px", fontWeight:"500"}}>
                  <div>Lampung Timur</div>
                  <div>Bagian Kesejahteraan</div>
                </div>
              </div>
            </Navbar.Brand>

            <div className="nav">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" className="hover-navbar">Beranda</Nav.Link>
                  <Nav.Link as={Link} to="/News" className="hover-navbar">Berita</Nav.Link>
                  <Nav.Link className="hover-navbar">Artikel</Nav.Link>
                  <Nav.Link className="hover-navbar">Dokumen</Nav.Link>
                  <NavDropdown className="hover-navbar" title="Galeri" id="basic-nav-dropdown">
                    <NavDropdown.Item to="">Foto</NavDropdown.Item>
                    <NavDropdown.Item to="">Video</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="hover-navbar">Statis</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
