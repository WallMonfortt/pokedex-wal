import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: '#185ADB',
    color: '#ffffff',
    border: '5px solid #FFD523',
    borderRadius: '15px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 3),
  },
}));

export default function ModalPokemon({open, setOpen, pokemon}) {
  const classes = useStyles();
 
  const [modalStyle] = useState(getModalStyle);
  console.log(open);

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="container grid ">
        <h5 className="m-0 col-10 p-0">{pokemon.name}</h5>
        <span className="badge id col-2">#{pokemon.id}</span>
        <img 
          className="col-5"
          src={pokemon.sprites.other.dream_world.front_default} 
          alt="pokemon" 
        />
        <span className="badge id col-2">
          {pokemon.types.map((eachType, i) => <h6 className="types" key={i} >{eachType.type.name}</h6>)}
        </span>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}