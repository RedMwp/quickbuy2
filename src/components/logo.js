import React from 'react';
import 'Navbar.css'
let Logo = ()=>{

  return (
      <Link to="/">
        {' '}
        <p className="logo">
          Quick<span>Buy</span>
        </p>
      </Link>
    
  )
}

export default Logo;