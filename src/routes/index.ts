import { Router } from 'express'
import productController from '../controllers/productController'
import loginController from '../controllers/loginController'

const routes = Router()

routes.get('/products', productController.get)

routes.post('/products', productController.post)

routes.delete('/products/:id', productController.delete)

routes.put('/products/:id', productController.put)

routes.get('/products/:id', productController.getById)

routes.post('/login', loginController.post)

export default routes
