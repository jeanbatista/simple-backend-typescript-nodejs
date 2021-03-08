import { Request } from 'express'

import jwtUtil from '../utils/jwtUtil'

export default async (req: Request): Promise<boolean> => {
  const token = req.headers['x-api-key'].toString()
  return !token ? false : jwtUtil.verify(token)
}
