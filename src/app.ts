import * as express from 'express'
import { routes } from './routes'
import * as cors from 'cors'

class App {
  public app: express.Express

  constructor() {
    this.app = express()
    this.config()
    this.middlewares()
  }

  private config(): void {
    this.app
      .use(
        cors({
          origin: '*',
          methods: ['GET'],
          allowedHeaders: '*',
        })
      )
      .use(express.json())
  }

  private middlewares(): void {
    // routes
    this.app.use(routes)
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () =>
      console.log(`Server is running on port: ${PORT}`)
    )
  }
}

export { App }

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App()
