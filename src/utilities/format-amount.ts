export const formatMoney = (amount: number, currency:string, decimal: boolean): string => {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: decimal ? 2 : 0
  }).format(amount)

  return formattedAmount
}


export const formatAmount = (amount: number): string => {
    const formattedAmount = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0
    }).format(amount)
    return formattedAmount
}