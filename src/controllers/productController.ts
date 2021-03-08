import { Request, Response } from 'express'
import httpStatus from 'http-status-codes'

import productService from '../services/productService'
import errorResponse from '../utils/errorResponse'

class ProductController {
  public async post (req: Request, res: Response): Promise<Response> {
    try {
      const product = await productService.create(req.body)
      return res.status(httpStatus.CREATED).send(product)
    } catch (err) {
      errorResponse.send(res, err)
    }
  }

  public async get (req: Request, res: Response): Promise<Response> {
    try {
      const products = await productService.find()
      return res.json(products)
    } catch (err) {
      errorResponse.send(res, err)
    }
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    try {
      const result = await productService.delete(req.params.id)
      return res.json(result)
    } catch (err) {
      errorResponse.send(res, err)
    }
  }

  public async put (req: Request, res: Response): Promise<Response> {
    try {
      const result = await productService.update(req.params.id, req.body)
      return res.json(result)
    } catch (err) {
      errorResponse.send(res, err)
    }
  }

  public async getById (req: Request, res: Response): Promise<Response> {
    try {
      const product = await productService.findById(req.params.id)
      return res.json(product)
    } catch (err) {
      errorResponse.send(res, err)
    }
  }
}

export default new ProductController()
