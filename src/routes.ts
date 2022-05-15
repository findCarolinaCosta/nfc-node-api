import { Request, Response, Router, NextFunction } from 'express'
import Order from './controllers/Invoice'
import InvoiceService from './services/Invoice'
import * as swaggerUi from 'swagger-ui-express'
import * as swaggerDocs from './swagger/swagger.json'

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

routes.get('/', (_req: Request, res: Response) => res.redirect('/docs'))

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

routes.get('/account/nfc', Invoice.getAll)
