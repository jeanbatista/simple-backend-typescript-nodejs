import { Response, Request } from 'express'

export default async (err, req: Request, res: Response) => {
  console.log('eu')
  const errorCode = err.status || 500
  return res.status(errorCode)
    .send({
      code: errorCode,
      message: err.message,
      error: errorCode === 500
        ? 'Internal Server Error'
        : err.name
    })
}
