import React, { useEffect, useState } from 'react'
import { NavBar } from './components/NavBar'
import { Pokedex } from './components/Pokedex'
import SearchBar from './components/SearchBar'
import { getAllPokes, getPokeData } from './helpers/getPokes'
import './styles/mainStyle.css'

const App = () => {

  const [pokemons, setPokemons] = useState([])
  const [total, setTotal] = useState(4)
  const [page, setPage] = useState(0)
  const [loadig, setLoadig] = useState(true)

  useEffect(() => {
    const getPokemons = async() =>{
      const data = await getAllPokes(total, total * page)
      const promises = data.results.map(async (pokemon) =>{
        return await getPokeData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoadig(false)
    }
    getPokemons();
  }, [page, total])

  return (
    <div>
      <NavBar />
      <div>
      <SearchBar />
      {loadig 
      ? (<div>Cargando Pokemones</div>)
      : <Pokedex 
        pokemons={pokemons} 
        page={page}
        setPage={setPage}
        total={total}
        setTotal={setTotal}
      />}
      </div>
    </div>
  )
}

export default App
