import Provider from '../database/models/Provider'
import Buyer from '../database/models/Buyer'
import Order from '../database/models/Order'

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
}

interface IInvoiceService {
  execute(): Promise<IOrder[]>
}

class InvoiceService implements IInvoiceService {
  constructor(private _model = Order) {}

  public async execute(): Promise<IOrder[]> {
    const orders: IOrder[] = await this._model.findAll({
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
    })

    return orders
  }
}

export default InvoiceService
