import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const GetPokemonData = async () => {
  const pokemonData = await api.get("pokemon");

  const pokemonAllData =await Promise.all(
    pokemonData?.data.results.map(async (item) => {
      const pokemonurldata = await axios.get(item.url);
      return {
        pokemonNameData: item.name,
        PokemonDetailsData: pokemonurldata.data,
      };
    })
  );
  return pokemonAllData
};
