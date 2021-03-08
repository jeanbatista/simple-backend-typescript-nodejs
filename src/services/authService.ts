import UnauthorizedException from '../exceptions/unauthorizedException'
import jwtUtil from '../utils/jwtUtil'
import env from '../app/env'

class AuthService {
  public async login (user:string, pass:string): Promise<Payload> {
    if (!(env.jwt.user === user && env.jwt.pass === pass)) {
      throw new UnauthorizedException('login inválido')
    }
    const token = jwtUtil.sign()
    const decoded = jwtUtil.decode(token)
    return {
      token: token,
      issuedAt: new Date(new Date(0)).setUTCSeconds(decoded['iat']),
      expiresAt: new Date(new Date(0)).setUTCSeconds(decoded['exp'])
    }
  }
}

interface Payload {
    token?:string,
    issuedAt?:number,
    expiresAt?:number
}

export default new AuthService()
