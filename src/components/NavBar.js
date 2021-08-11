import React from 'react'

export const NavBar = () => {
  const imgUrl ='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
  return (
    <nav className="position-relative navMain" >
  
      <img 
      src={imgUrl}
      alt='logo'
      className="position-absolute top-50 start-50 translate-middle-x"
      width="160px"
      />
    </nav>
  )
}
