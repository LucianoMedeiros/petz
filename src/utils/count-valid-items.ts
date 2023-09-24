import { SelectData } from '../model/select-model'

export const countValidItems = (list: SelectData[]): number => {
  return list.filter((item) => item.name != '' && item.value != '').length
}
