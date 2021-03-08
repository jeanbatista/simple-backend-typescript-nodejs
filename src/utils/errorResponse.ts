/* eslint-disable @typescript-eslint/no-explicit-any */
import statusHttp from 'http-status-codes'
import { Response } from 'express'

import NotFoundException from '../exceptions/notFoundException'
import UnauthorizedException from '../exceptions/unauthorizedException'

class ErrorResponse {
  public send (res: Response, err: any): any {
    const error = {
      code: statusHttp.INTERNAL_SERVER_ERROR,
      message: 'contact technical support',
      error: statusHttp.getStatusText(statusHttp.INTERNAL_SERVER_ERROR)
    }
    if (err instanceof NotFoundException) {
      error.code = statusHttp.NOT_FOUND
      error.message = err.text
      error.error = statusHttp.getStatusText(statusHttp.NOT_FOUND)
    } else if (err instanceof UnauthorizedException) {
      error.code = statusHttp.UNAUTHORIZED
      error.message = err.text
      error.error = statusHttp.getStatusText(statusHttp.UNAUTHORIZED)
    }
    console.log(err)
    return res.status(error.code).send(error)
  }
}

export default new ErrorResponse()
