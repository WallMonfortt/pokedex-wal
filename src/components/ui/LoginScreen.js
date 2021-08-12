import React, { useContext, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import WM2 from '../../img/WM2.png'
import WMonf from '../../img/WMonf.png'
import Pokeball from '../../img/Pokeball.png'
import Welcome from '../../img/Welcome-Trainer.png'
import { Modal, Button, ModalFooter, ModalHeader } from 'reactstrap';


export const LoginScreen = ({history}) => {

  const { dispatch } = useContext( AuthContext );

  const [value, setvalue] = useState('')
  const [message, setMessage] = useState()
  const [modal, setModal] = useState(false)

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
    setMessage('Please enter a name Trainer');
    showModal();
  }

  const showModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  return (
    <div className="login-container">
      <div className="container">
        <div className=" pokeball">
          <img 
          className=" animate__animated animate__bounce animate__delay-1s animate__slow animate__infinite" 
          height="100px" 
          alt="Pokeball"  
          src={Pokeball}  
          />
        </div>
        <div className="welcome">
           <img
            src={Welcome}
            alt="Welcome"
          />
        </div>
      <hr />

      <div className="welcome">
        <input 
          placeholder="Enter your name.." 
          minLength={3}
          maxLength={18}
          type="text"
          value={value}
          onChange={(e) => setvalue(e.target.value)} 

        />
      </div>

      <div className="welcome mt-3">
        <button
        className="btn btn-success"
        onClick={() => { handleLogin(value) }}
        >
        Login 
        </button>
      </div>

      <Modal isOpen={modal}>
        <ModalHeader>
         {message}
        </ModalHeader>

        <ModalFooter>
          <Button color="danger" onClick={() =>{closeModal();}}>Close</Button>
        </ModalFooter>
      </Modal>

      
      <div className="logos">
        <img height="50px" alt="logo"  src={WM2} />
        <div ><img height="50px" alt="logo"  src={WMonf} /></div>
      </div>
    </div>
    </div>
  )
}
