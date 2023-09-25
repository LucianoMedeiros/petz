export const calculateTax = (maxGeneration: number, subTotal: number) => {
  const tax = 0.03
  const limitTax = tax * 10

  const limitPercent = 30 / 100

  if (maxGeneration * tax <= limitPercent) {
    return maxGeneration * tax * subTotal
  }
  return limitTax * subTotal
}
