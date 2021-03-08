import { Request, Response } from 'express'

import authService from '../services/authService'
import errorResponse from '../utils/errorResponse'

class LoginController {
  public async post (req: Request, res: Response): Promise<Response> {
    try {
      const token = await authService.login(req.body.user, req.body.pass)
      return res.json(token)
    } catch (err) {
      errorResponse.send(res, err)
    }
  }
}

export default new LoginController()
