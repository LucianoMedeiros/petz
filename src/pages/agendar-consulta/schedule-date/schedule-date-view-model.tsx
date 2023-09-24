import SelectModel from '@/model/select-model'
import { apiRoutes } from '@/routes/api-routes'
import { handleDataStringListToSelect } from '@/utils/handle-data'

export class ScheduleDateViewModel {
  async getList(): Promise<SelectModel[]> {
    try {
      const response = await fetch(apiRoutes.date)
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`)
      }
      const data = await response.json()
      return handleDataStringListToSelect(data)
    } catch (error: any) {
      throw new Error(`Erro ao buscar itens: ${error.message}`)
    }
  }
}
