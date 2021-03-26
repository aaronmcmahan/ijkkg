import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Container } from 'react-bootstrap'

import IndexLayout from '../layouts'
import Profile from '../components/Profile'

// TODO: get the board memebers photos pulled
const Board = () => {
  const data = useStaticQuery(graphql`
    query BoardQuery {
      allFile(filter: { extension: { eq: "png" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `)

  const handleProfileImage = (name: string) => data.allFile.nodes.filter((e) => e.name.indexOf(name) > -1)[0].publicURL

  return (
    <IndexLayout>
      <Container className="py-5">
        <h3 className="display-5">Chairman</h3>
        <Profile fullName='Soke Kenneth Rosson' imgSrc={handleProfileImage('kenneth')} qualifications={['10th Dan', '']} />
        <h3 className="display-5">Vice Chairman</h3>
        <Profile fullName='Hanshi Randy Smith' imgSrc={handleProfileImage('randy')} qualifications={['8th Dan', '']} />
        <h3 className="display-5">Board</h3>
        <Profile fullName='Hanshi Ron Sims' imgSrc={handleProfileImage('ron')} qualifications={['8th Dan']} />
        <Profile fullName='Hanshi Vern Farmer' imgSrc={handleProfileImage('vern')} qualifications={['8th Dan']} />
        <Profile fullName='Hanshi Rick Reem' imgSrc={handleProfileImage('rick')} qualifications={['8th Dan']} />
        <Profile fullName='Hanshi Christopher Wright' imgSrc={handleProfileImage('christopher')} qualifications={['8th Dan']} />
      </Container>
    </IndexLayout>
  )
}
export default Board
