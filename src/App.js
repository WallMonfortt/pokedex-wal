import React, { useEffect, useState } from 'react'
import { NavBar } from './components/NavBar'
import { Pokedex } from './components/Pokedex'
import SearchBar from './components/SearchBar'
import { getAllPokes, getPokeData, getPokeTypes } from './helpers/getPokes'
import './styles/mainStyle.css'

const App = () => {

  const [pokemons, setPokemons] = useState([])
  const [total, setTotal] = useState(4)
  const [page, setPage] = useState(0)
  const [loadig, setLoadig] = useState(true)

  const [types, setTypes] = useState([])
  const [currentType, setCurrentType] = useState('')

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

  useEffect(() => {
    const getFilterPokemons = async() =>{
      const data = await getPokeTypes(currentType)
      const promises = data.pokemon.map(async (pokemon) =>{
        return await getPokeTypes(pokemon.url)
      })
      const results = await Promise.all(promises)
      // setPokemons(results);
      console.log(results);
    }
    getFilterPokemons();
  }, [currentType])

  useEffect(() => {
    const getAllTypes = async() =>{
      const dataTypes = await getPokeTypes()
      const eachType = dataTypes.results.map( value => value.name )
      setTypes(eachType)
      console.log(eachType);
    }
    getAllTypes()

    
  }, [])

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
        types={types}
        setCurrentType={setCurrentType}
      />}
      </div>
    </div>
  )
}

export default App
