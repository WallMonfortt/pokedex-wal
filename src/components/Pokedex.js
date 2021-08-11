import React, { useEffect, useState } from 'react'
import { Pokemon } from './Pokemon';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(1),
    },
  },
}));

export const Pokedex = ( {pokemons, page, setPage, total, setTotal} ) => {

  const totalPokes = 1118;

  const [totalPages, setTotalPages] = useState( Math.ceil(totalPokes / total))

  useEffect(() => {
    setTotalPages(Math.ceil(totalPokes / total))
  }, [total])

  const classes = useStyles();
  const handleChange = ( e, value) => {
    setPage(value - 1)
    console.log(e, value);
  };

  const onSelect =(e) =>{
    setTotal(e)
  }

  const list = pokemons.map((poke, i) => 
  <Pokemon pokemon={poke} key={poke.name}/>)

  // console.log(pokemons);
  return (
    <div className="container-lg">
      <div className="header">
        <h1 className="hdr">Pokedex</h1>
        <div className={classes.root} >
          <Pagination 
            count={totalPages}
            siblingCount={4}
            size="medium" 
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="position-relative">
        <div className="mb-2 sel">
          #Pokemons:
          <select className="ms-2" defaultValue={4} onChange={(e) => onSelect(e.target.value)}>
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
          <option value={20}>20</option>
        </select>
        </div>
      </div>

      <div className="container-lg">
        <div className="gridPers">
          {list}
        </div>
      </div>
      
    </div>
  )
}
