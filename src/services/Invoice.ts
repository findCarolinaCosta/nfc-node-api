import Provider from '../database/models/Provider'
import Buyer from '../database/models/Buyer'
import Order from '../database/models/Order'
import { serialize } from '../utils/serialize'

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

interface IInvoiceService {
  execute(): Promise<IOrderSerialized[]>
}

class InvoiceService implements IInvoiceService {
  constructor(private _model = Order) {}

  public async execute(): Promise<IOrderSerialized[]> {
    let orders: IOrder[] = await this._model.findAll({
      attributes: {
        exclude: ['buyerId', 'providerId', 'updatedAt', 'createdAt'],
      },
      include: [
        {
          model: Buyer,
          as: 'buyer',
          attributes: { exclude: ['id', 'updatedAt', 'createdAt'] },
        },
        {
          model: Provider,
          as: 'provider',
          attributes: { exclude: ['id', 'updatedAt', 'createdAt'] },
        },
      ],
      raw: true,
    })

    const newOrders: IOrderSerialized[] = await Promise.all(
      orders.map((order) => serialize(order))
    )

    return newOrders
  }
}

export default InvoiceService
