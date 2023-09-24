import SelectModel from '../model/select-model'

type PokemonApiObjectType = {
  name: string
  url: string
}

export const handleDataPokemonObjectToSelect = (data: PokemonApiObjectType[]) => {
  if (data.length > 0) {
    return data.map((item) => new SelectModel({ name: item.name, value: item.name }))
  }

  return [{ name: 'nenhum valor encontrado', value: '' }]
}
export const handleDataStringListToSelect = (data: string[]) => {
  if (data.length > 0) {
    return data.map((item) => new SelectModel({ name: item, value: item }))
  }

  return [{ name: 'nenhum valor encontrado', value: '' }]
}
