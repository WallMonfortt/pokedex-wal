import React, { useState } from 'react'
import { getPokes } from '../helpers/getPokes';
import ModalPokemon from './ModalPokemon';


const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState()

  const [open, setOpen] = useState(false);

  const onChange = (e) =>{
    setSearch(e.target.value)
  }

  const handleSearch = async() =>{
    if (search) {
      const data = await getPokes(search);
      setPokemon(data)
      setOpen(true);
    }
    
  }


  return (
    <div className="container-lg" >
      <div className="input-group flex-nowrap mt-5">
      <span className="input-group-text" id="addon-wrapping">name / #</span>
        <input 
          className="form-control"
          placeholder="Search Pokemon by Name or Id..."
          autoComplete="none"
          onChange={onChange}
        />
        <button 
          className="btn btn-outline-secondary" 
          type="button" 
          id="button-addon2"
          onClick={handleSearch}
          >
          Search
        </button>
      </div>

      {pokemon && 
        <ModalPokemon 
        open={open} 
        setOpen={setOpen} 
        pokemon={pokemon}
        />
      }
    </div>
  )
}

export default SearchBar
