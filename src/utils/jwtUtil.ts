/* eslint-disable @typescript-eslint/explicit-function-return-type */
import jsonwebtoken from 'jsonwebtoken'
import env from '../app/env'

class JWT {
  public async verify (token: string): Promise<boolean> {
    try {
      jsonwebtoken.verify(token, env.jwt.cert)
      return true
    } catch (err) {
      return false
    }
  }

  public sign (): string {
    const token = jsonwebtoken.sign(
      { user: env.jwt.user },
      env.jwt.cert,
      { expiresIn: '1d' }
    )
    return token
  }

  public decode (token: string) {
    return jsonwebtoken.decode(token)
  }
}

export default new JWT()
