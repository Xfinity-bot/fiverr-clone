import React from 'react'
import { Link } from 'react-router-dom'
import './CatCard.scss'
const CatCard = () => {
  return (
    <Link to="/gigs?cat=design"></Link>
    <div>CatCard</div>
  )
}

export default CatCard