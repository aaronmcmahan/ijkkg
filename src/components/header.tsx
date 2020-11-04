import { Link } from "gatsby"
import React from "react"
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

import logo from "../images/logo.svg"

const Header = () => {

  return (
    <Navbar bg="dark" variant="dark" >
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          height="50"
          className="d-inline-block"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
      <Link to="/" className="font" activeClassName="active">
        <Nav.Link as="span" eventKey="home">
          Home
        </Nav.Link>
      </Link>
      <Link to="/history" className="link-no-style" activeClassName="active">
        <Nav.Link as="span" eventKey="history">
          History
        </Nav.Link>
      </Link>

    </Nav>
    <Nav>
      <Nav.Link href="https://www.facebook.com/IJKKG">
        <AiFillFacebook/>
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/ijkkg_goju/">
        <AiFillInstagram />
      </Nav.Link>

      <Button className="pl-2" variant="primary">Members</Button>

    </Nav>
    </Container>
  </Navbar>
)
}

export default Header
