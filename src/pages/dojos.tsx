import * as React from 'react'
import { Link } from 'gatsby'

import IndexLayout from '../layouts'

const Dojos = () => (
  <IndexLayout>
    <h1>Hi from the Dojos</h1>
    <p>Welcome to Dojos</p>
    <ul>
      <li>
        <Link to="/a-markdown-page/">Show me some Markdown!</Link>
      </li>
      <li>
        <Link to="/">Take me back home.</Link>
      </li>
    </ul>
  </IndexLayout>
)

export default Dojos
