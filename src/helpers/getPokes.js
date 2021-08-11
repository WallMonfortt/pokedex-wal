import axios from 'axios';

export const getPokes = async(pokemon) => {
  const res = await axios({
    method:"GET",
    url:`/${pokemon}`,
    baseURL:"https://pokeapi.co/api/v2/pokemon"
  });
  return ( res.data )
}

export const getAllPokes = async(limit = 4, offset = 0) => {
  const res = await axios({
    method:"GET",
    url:`?limit=${limit}&offset=${offset}`,
    baseURL:`https://pokeapi.co/api/v2/pokemon`
  });
  return ( res.data )
}

export const getPokeData = async(url) => {
  const res = await axios({
    method:"GET",
    baseURL:`${url}`
  });
  return ( res.data )
}

export const getPokeTypes = async( type = '' ) => {
  const res = await axios({
    method:"GET",
    url:`/${type}`,
    baseURL:`https://pokeapi.co/api/v2/type`
  });
  return ( res.data )
}

