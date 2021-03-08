/* eslint-disable no-undef */
import db from '../../app/db'
import { ProductInterface } from '../../models/interfaces/productInterface'
import productRepository from '../../repositories/productRepository'

describe('ProductRepository Suit Tests', () => {
  beforeEach(async () => db.start())

  it.skip('create', async () => {
    const newProduct: ProductInterface = {
      name: 'Arroz',
      description: '',
      price: 10.2
    }
    const productResult = await productRepository.create(newProduct)
    console.log(productResult)
  })
  it.skip('delete', async () => {
    await productRepository.delete('1')
  })
  it.skip('update', async () => {
    await productRepository.update('1', { name: '', description: '', price: 0 })
  })
  it.skip('find', async () => {
    await productRepository.find()
  })
  it.skip('findById', async () => {
    await productRepository.findById('1')
  })
})
