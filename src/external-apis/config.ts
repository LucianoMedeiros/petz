const pokemonBaseUrl = process.env.NEXT_PUBLIC_POKEMON_API_BASE_URL

export const apiConfig = {
  baseUrl: pokemonBaseUrl,
  endpoints: {
    region: `${pokemonBaseUrl}/region`,
    location: `${pokemonBaseUrl}/location`,
    pokemon: `${pokemonBaseUrl}/pokemon`,
  },
}
