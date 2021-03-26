import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'


interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({ }) => {
  return (
    <footer className="footer">
      <Container>
        <Row>

          <Col>
            <span className="text-muted">
              © {(new Date().getFullYear())}
          IJKKG - International Japan Karate-Do Kenbudo-Kai Goju-Ryu.
          All rights reserved
        </span>
          </Col>
          <Col>this is a test</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
