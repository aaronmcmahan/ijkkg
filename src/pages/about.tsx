import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'gatsby'

import IndexLayout from '../layouts'

const About = () => (
  <IndexLayout>
    <Container>

      <h1>Hi from ABOUT</h1>
      <p>Welcome to ABOUT</p>
      <ul>
        <li>
          <Link to="/a-markdown-page/">Show me some Markdown!</Link>
        </li>
        <li>
          <Link to="/">Take me back home.</Link>
        </li>
      </ul>
    </Container>
  </IndexLayout>
)

export default About
