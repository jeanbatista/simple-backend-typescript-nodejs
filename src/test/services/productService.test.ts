/* eslint-disable no-undef */
import db from '../../app/db'
import { ProductInterface } from '../../models/interfaces/productInterface'
import productService from '../../services/productService'

describe('ProductServices Suit Tests', () => {
  beforeEach(async () => db.start())

  it.skip('create', async () => {
    const newProduct: ProductInterface = {
      name: 'Arroz',
      description: '',
      price: 10.2
    }
    const productResult = await productService.create(newProduct)
    console.log(productResult)
  })
  it.skip('delete', async () => {
    await productService.delete('1')
  })
  it.skip('update', async () => {
    await productService.update('1', { name: '', description: '', price: 0 })
  })
  it.skip('find', async () => {
    await productService.find()
  })
  it.skip('findById', async () => {
    await productService.findById('1')
  })
})
