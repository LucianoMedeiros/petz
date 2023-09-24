import { apiConfig } from '@/external-apis/config'
import SelectModel from '@/model/select-model'
import { handleDataPokemonObjectToSelect } from '@/utils/handle-data'

export class LocationViewModel {
  async getList(): Promise<SelectModel[]> {
    try {
      const response = await fetch(apiConfig.endpoints.location)
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`)
      }
      const data = await response.json()
      return handleDataPokemonObjectToSelect(data.results)
    } catch (error: any) {
      throw new Error(`Erro ao buscar itens: ${error.message}`)
    }
  }
}
