import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { name },
  } = req
  const pokemonName = name as string

  const generationUrls = [
    'https://pokeapi.co/api/v2/generation/1/',
    'https://pokeapi.co/api/v2/generation/2/',
    'https://pokeapi.co/api/v2/generation/3/',
    'https://pokeapi.co/api/v2/generation/4/',
    'https://pokeapi.co/api/v2/generation/5/',
    'https://pokeapi.co/api/v2/generation/6/',
    'https://pokeapi.co/api/v2/generation/7/',
    'https://pokeapi.co/api/v2/generation/8/',
    'https://pokeapi.co/api/v2/generation/9/',
  ]

  try {
    let generationId = null

    for (const url of generationUrls) {
      const response = await fetch(url)
      const data = await response.json()

      const foundPokemon = data.pokemon_species.find((pokemon: { name: string; url: string }) => pokemon.name === pokemonName)

      if (foundPokemon) {
        generationId = data.id
        break
      }
    }

    if (generationId === null) {
      res.status(404).json({ generation: null, message: 'Pokémon não encontrado em nenhuma geração.' })
    } else {
      res.status(200).json({ generation: generationId })
    }
  } catch (error) {
    console.error('Erro:', error)
    res.status(500).json({ message: 'Ocorreu um erro na solicitação.' })
  }
}

export default handler
