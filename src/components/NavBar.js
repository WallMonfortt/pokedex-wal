import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types'

export const NavBar = () => {
  const imgUrl ='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
 
  const {user:{name}, dispatch } = useContext(AuthContext)
  const history = useHistory();

  const handleLogout = () => {

    history.replace('/login');

    dispatch({
      type: types.logout,
    });
    
  }

  return (
    <nav className="position-relative navMain" >

    <span className="position-relative trainer top-50 translate-middle-x" >Trainner: {name}</span>
  
      <img 
      src={imgUrl}
      alt='logo'
      className="position-absolute top-50 start-50 translate-middle-x"
      width="160px"
      />

      <button 
       className="btn btn-dark position-absolute top-50 end-0 translate-middle-x text-decoration-none text-white"
       onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  )
}
