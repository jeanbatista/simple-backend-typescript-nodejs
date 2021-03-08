import express from 'express'
import cors from 'cors'
import swaggerUI from 'swagger-ui-express'
import jsyaml from 'js-yaml'
import fs from 'fs'
import { resolve } from 'path'
import * as OpenApiValidator from 'express-openapi-validator'

import routes from '../routes'
import db from './db'
import apiKeyAuthMiddleware from '../middlewares/apiKeyAuthMiddleware'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    const docPath = resolve(__dirname, 'doc.yaml')
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use('/docs', swaggerUI.serve, swaggerUI.setup(jsyaml.safeLoad(fs.readFileSync(docPath, 'utf-8').toString())))
    this.express.use(
      OpenApiValidator.middleware({
        apiSpec: docPath,
        validateRequests: true,
        validateResponses: true,
        validateSecurity: {
          handlers: {
            ApiKeyAuth: apiKeyAuthMiddleware
          }
        }
      })
    )
  }

  private database (): void {
    db.start()
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
