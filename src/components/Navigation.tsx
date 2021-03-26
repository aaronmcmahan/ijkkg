import { Link } from 'gatsby'
import React from 'react'
import { Nav, Container } from 'react-bootstrap'

interface NavigationProps {

}

const Navigation: React.FC<NavigationProps> = () => {

  return (
    <div className="border-bottom">

      <Container>
        <Nav defaultActiveKey="/home">
          <Nav.Item >
            <Link activeClassName="active" className="nav-link pl-0" to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link activeClassName="active" className="nav-link" to="/about">About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link activeClassName="active" className="nav-link" to="/board">Board of Directors</Link>
          </Nav.Item>
          <Nav.Item>
            <Link activeClassName="active" className="nav-link" to="/dojos">Dojos</Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Link activeClassName="active" className="nav-link" to="/news">News</Link>
          </Nav.Item> */}
        </Nav>
      </Container>
    </div>
  )
}

export default Navigation
