import React, { useContext, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


export const LoginScreen = ({history}) => {

  const { dispatch } = useContext( AuthContext );

  const [value, setvalue] = useState('')
  const [message, setMessage] = useState()

  const handleLogin = (value) => {

    if (value) {
      dispatch({
        type: types.login,
        payload:{
          name: value
        }
      });
      history.replace('/');
    } 
    setMessage('Please enter a name Trainner')
  }

  return (
    <div className="container mt-4">
      <h1>Login</h1>
      <hr />

      <input 
        placeholder="Enter your name.." 
        type="text" 
        value={value}
        onChange={(e) => setvalue(e.target.value)} 

      />

      <button
       className="btn btn-success"
       onClick={() => { handleLogin(value) }}
      >
       Login 
      </button>
      {message}
    </div>
  )
}
