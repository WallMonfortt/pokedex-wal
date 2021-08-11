import React from 'react'

export const Pokemon = ( {pokemon} ) => {
  const points = pokemon.stats.map((stat, i) => 
    <p
      key={stat.stat.name} 
      className="points">{stat.stat.name} : <span className="id">{stat.base_stat}</span>
    </p>)
  return (
  <div className="card text-white bg-danger">
    <div className="card-body">
      <img 
        src={pokemon.sprites.other.dream_world.front_default} 
        alt="pokemon" 
        className="pokes"
      />
      <div className="card-title m-1 grid row">
      <h5 className="m-0 col-10 p-0">{pokemon.name}</h5>
      <span className="badge id col-2">#{pokemon.id}</span>
      </div>
      <div>
       <div>
       {pokemon.types.map((eachType, i) => <h6 className="types" key={i} >{eachType.type.name}</h6>)}
       </div>
      </div>
      <div className="grid row">{points}</div>
    </div>
  </div>
  )
}
