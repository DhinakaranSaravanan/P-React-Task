import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()    
  return (
    <div className='footer nav'>Copyrights DK {year}</div>
  )
}

export default Footer