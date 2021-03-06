import * as React from 'react'
import { Link } from 'gatsby'

import IndexLayout from '../layouts'

const News = () => (
  <IndexLayout>
    <h1>Hi to the news</h1>
    <p>Welcome to page 2</p>
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

export default News
