interface IOrder {
  id: number
  emissionDate: string
  value: string
  orderStatusBuyer: string
  provider?: {
    name: string
  }
  buyer?: {
    name: string
  }
  nNf: string
}

interface IOrderSerialized {
  id: number
  emissionDate: string
  value: string
  orderStatusBuyer: number
  provider?: {
    name: string
  }
  buyer?: {
    name: string
  }
  nNf: string
}
// reconstruir objeto para formato esperado no front
export function serialize(obj: IOrder): IOrderSerialized {
  const [dateOnly] = obj.emissionDate.split('T')
  const [yy, mm, dd] = dateOnly.split('-')
  const formattedValue = Number(obj.value).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return {
    ...obj,
    emissionDate: `${dd}/${mm}/${yy}`,
    value: formattedValue,
    orderStatusBuyer: parseInt(obj.orderStatusBuyer),
  }
}
