export interface SelectData {
  value: string
  name: string
  generation?: number
}

class SelectModel {
  value: string
  name: string
  generation?: number

  constructor(data: SelectData) {
    this.value = data.value
    this.name = data.name
    this.generation = data.generation
  }
}

export default SelectModel
