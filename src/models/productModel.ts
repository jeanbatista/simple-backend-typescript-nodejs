import { Document, Schema, Model, model } from 'mongoose'
import { ProductInterface } from './interfaces/productInterface'

export interface ProductModel extends ProductInterface, Document { }

const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number
}, {
  timestamps: true
})

export const Product: Model<ProductModel> = model<ProductModel>('Product', ProductSchema)
