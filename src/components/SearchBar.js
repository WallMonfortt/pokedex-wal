import React, { useState } from 'react'
import { getPokes } from '../helpers/getPokes';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState()

  const onChange = (e) =>{
    setSearch(e.target.value)
  }

  const handleSearch = async() =>{
    const data = await getPokes(search);
    setPokemon(data)
    console.log(data);
  }


  return (
    <div className="container-lg" >
      <div className="input-group flex-nowrap mt-5">
      <span className="input-group-text" id="addon-wrapping">name / #</span>
        <input 
          className="form-control"
          placeholder="Search Pokemon..."
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

      <div className="mt-4">
        {pokemon &&
        <div>
        <div>Nombre: {pokemon.name}</div>
        <img src={pokemon.sprites.other.dream_world.front_default} alt="pokemon" />
        {/* <div>Types: {pokemon.types[0].type}</div> */}
        {/* <div>Nombre: {pokemon.name}</div>
        <div>Nombre: {pokemon.name}</div>
        <div>Nombre: {pokemon.name}</div> */}
        </div>}
      </div>
    </div>
  )
}

export default SearchBar
