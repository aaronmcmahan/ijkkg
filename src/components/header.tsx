import React from 'react'
import { Container, Media, Navbar } from 'react-bootstrap'
import logo from '../images/ijkkg_logo_traditional.svg'
interface HeaderProps {
  title: string
  titleJapanese: string
}

const Header: React.FC<HeaderProps> = ({ title, titleJapanese }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Media>
            <img
              width={65}
              height={65}
              className="mr-3 rounded-circle bg-white py-2"
              src={logo}
              alt="Generic placeholder"
            />
            <Media.Body>
              <p className="mb-0">{titleJapanese}</p>
              <p className="mb-0">{title}</p>
            </Media.Body>
          </Media>

        </Navbar.Brand>

      </Container>
    </Navbar >
  )
}

export default Header
