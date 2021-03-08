import dateFormat from 'dateformat'

import { ProductInterface } from '../models/interfaces/productInterface'
import { ProductModel } from '../models/productModel'
import productRepository from '../repositories/productRepository'
import NotFoundException from '../exceptions/notFoundException'

class ProductService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async create (obj: ProductInterface): Promise<any> {
    const product = await productRepository.create(obj)
    return { id: product.id }
  }

  public async delete (id: string): Promise<string> {
    const result = await productRepository.delete(id)
    if (!result) {
      throw new NotFoundException('product not found for removal')
    }
    return 'product successfully removed'
  }

  public async update (id: string, obj: ProductInterface): Promise<string> {
    const product = await productRepository.findById(id)
    if (!product) {
      throw new NotFoundException('Product not found')
    }
    await productRepository.update(id, obj)
    return 'product updated successfully'
  }

  public async find (): Promise<ProductModel[]> {
    const products = await productRepository.find()
    return products.map(item => this.mapProduct(item))
  }

  public async findById (id: string): Promise<ProductModel> {
    const product = await productRepository.findById(id)
    if (!product) {
      throw new NotFoundException('Product not found')
    }
    return this.mapProduct(product)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private mapProduct (obj: ProductInterface): any {
    return {
      id: obj['id'],
      name: obj.name,
      description: obj.description,
      price: obj.price,
      createdAt: dateFormat(obj['createdAt'], 'isoUtcDateTime'),
      updatedAt: dateFormat(obj['updatedAt'], 'isoUtcDateTime')
    }
  }
}

export default new ProductService()
