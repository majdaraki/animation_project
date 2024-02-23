import React from 'react'
import { Link } from 'react-router-dom'
import "./FooterApproach.css"

export default function FooterApproach() {
  return (
      <div className='footer'>
        <Link>Vision</Link>
          <Link>Approach</Link>
          <Link>Culture</Link>
          <Link>Ivestments</Link>
          <Link>AL Rajhi Investment </Link>
          <div className='con'>
            <Link>Careers</Link>
            <Link>Contact</Link>
          </div>
    </div>
  )
}
