import { apiConfig } from './config'
import { handleApiError } from './error-handling'

export async function getRegions() {
  try {
    const response = await fetch(apiConfig.endpoints.region)

    if (!response.ok) {
      alert('Erro ao obter dados da API')
    }
    return await response.json()
  } catch (error: unknown) {
    handleApiError(error)
    throw error
  }
}
