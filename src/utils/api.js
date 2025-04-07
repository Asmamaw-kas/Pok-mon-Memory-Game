import axios from 'axios';

const API_KEY = 'YOUR_POKEAPI_KEY'; // Not actually needed for PokeAPI
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemon = async (limit = 12) => {
  try {
    const response = await axios.get(`${BASE_URL}?limit=${limit}`);
    const pokemonUrls = response.data.results.map(p => p.url);
    const pokemonData = await Promise.all(
      pokemonUrls.map(url => axios.get(url))
    );
    return pokemonData.map(p => ({
      id: p.data.id,
      name: p.data.name,
      image: p.data.sprites.front_default,
    }));
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    return [];
  }
};