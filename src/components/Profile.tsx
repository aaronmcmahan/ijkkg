import React from 'react'
import { Media } from 'react-bootstrap'

interface ProfileProps {
  imgSrc: string,
  fullName: string,
  qualifications: string[]
}

const Profile: React.FC<ProfileProps> = ({ imgSrc, fullName, qualifications }) => {
  return (
    <Media className=" my-3">
      <img
        height={128}
        className="mr-3 rounded"
        src={imgSrc}
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>{fullName}</h5>
        {qualifications.map(q => <p>{q}</p>)}
      </Media.Body>
    </Media>
  )
}

export default Profile
