import { Request, Response, Router, NextFunction } from 'express'
import Order from './controllers/Invoice'
import InvoiceService from './services/Invoice'

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

interface IInvoiceController {
  getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response<IOrder[]>>
}

export const routes = Router()
const invoiceService = new InvoiceService()
const Invoice: IInvoiceController = new Order(invoiceService)

routes.get('/', (_req: Request, res: Response) => {
  return res.json('Server up ✔')
})

routes.get('/docs', (_req: Request, res: Response) => {
  return res.json('Documentation not implemented yet!')
})

routes.get('/account/nfc', Invoice.getAll)
