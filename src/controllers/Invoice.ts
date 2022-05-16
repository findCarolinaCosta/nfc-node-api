import { Response, Request, NextFunction } from 'express'

interface IOrder {
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
  execute(): Promise<IOrder[]>
}

interface IInvoiceController {
  getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response<IOrder[]>>
}

class Invoice implements IInvoiceController {
  readonly _orderService: IInvoiceService

  constructor(service: IInvoiceService) {
    this._orderService = service
  }

  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response<IOrder[]>> => {
    try {
      const orders: IOrder[] = await this._orderService.execute()

      return res.status(200).json(orders)
    } catch (error) {
      next(error)
    }
  }
}

export default Invoice
