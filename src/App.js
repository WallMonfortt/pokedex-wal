import React, { useEffect, useState } from 'react'
import { NavBar } from './components/NavBar'
import { Pokedex } from './components/Pokedex'
import SearchBar from './components/SearchBar'
import { getAllPokes, getPokeData, getPokeTypes } from './helpers/getPokes'
import './styles/mainStyle.css'

const App = () => {

  const [pokemons, setPokemons] = useState([])
  const [pokemonsType, setPokemonsType] = useState([])
  const [totalPokemons, setTotalPokemons] = useState(0)
  const [total, setTotal] = useState(4)
  const [page, setPage] = useState(0)
  const [loadig, setLoadig] = useState(true)

  const [types, setTypes] = useState([])
  const [currentType, setCurrentType] = useState('')

  useEffect(() => {
    if (currentType === '') {
      const getPokemons = async() =>{
        const data = await getAllPokes(total, total * page)
        setTotalPokemons(data.count)
        const promises = data.results.map(async (pokemon) =>{
          return await getPokeData(pokemon.url)
        })
        const results = await Promise.all(promises)
        setPokemons(results)
        setLoadig(false)
      }
      getPokemons();
    }else{
      const getFilterPokemons = async() =>{
        const data = await getPokeTypes(currentType)
        const promises = data.pokemon.map( async value => {
          return await getPokeData(value.pokemon.url)
        })
        const res = await Promise.all(promises)
        setPokemonsType(res);
        setTotalPokemons(res.length)
      }
      getFilterPokemons();
      
    }
  }, [page, total, currentType])

  useEffect(() => {
    setPokemons(pokemonsType.slice(page * total, parseInt((page * total )) + parseInt(total)))
  }, [pokemonsType, page, total])

  useEffect(() => {
    const getAllTypes = async() =>{
      const dataTypes = await getPokeTypes()
      const eachType = dataTypes.results.map( value => value.name )
      setTypes(eachType)
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
        totalPokemons={totalPokemons}
      />}
      </div>
    </div>
  )
}

export default App
