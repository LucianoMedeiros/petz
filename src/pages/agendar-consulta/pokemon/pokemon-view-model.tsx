import { apiConfig } from '@/external-apis/config'
import SelectModel from '@/model/select-model'
import { apiRoutes } from '@/routes/api-routes'
import { handleDataPokemonObjectToSelect } from '@/utils/handle-data'

export class PokemonViewModel {
  async getList(): Promise<SelectModel[]> {
    try {
      const response = await fetch(apiConfig.endpoints.pokemon)
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`)
      }
      const data = await response.json()
      return handleDataPokemonObjectToSelect(data.results)
    } catch (error: any) {
      throw new Error(`Erro ao buscar itens: ${error.message}`)
    }
  }

  async getGeneration(pokemonName: string): Promise<number> {
    try {
      const response = await fetch(apiRoutes.generation.replace(':pokemonName', pokemonName))
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`)
      }
      const data = await response.json()
      return data.generation
    } catch (error: any) {
      throw new Error(`Erro ao buscar itens: ${error.message}`)
    }
  }
}
