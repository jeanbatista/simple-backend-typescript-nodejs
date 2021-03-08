import { ProductInterface } from '../models/interfaces/productInterface'
import { Product, ProductModel } from '../models/productModel'

class ProductRepository {
  public async create (obj: ProductInterface): Promise<ProductModel> {
    return Product.create(obj)
  }

  public async delete (id: string): Promise<boolean> {
    const result = await Product.remove({ _id: id })
    return result.n === 1 || false
  }

  public async update (id: string, obj: ProductInterface): Promise<boolean> {
    await Product.updateOne({ _id: id }, obj)
    return true
  }

  public async find (): Promise<ProductModel[]> {
    return Product.find()
  }

  public async findById (id: string): Promise<ProductModel> {
    const product = await Product.findOne({ _id: id })
    return product || null
  }
}

export default new ProductRepository()
