import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



function History() {

  return (
    <Layout>
    <SEO title="History" />
    <h1>Organization history</h1>
    <p>This is where all the organization history will go.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export default History
