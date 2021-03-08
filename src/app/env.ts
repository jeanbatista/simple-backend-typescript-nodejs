
import config from 'config'

const configEnv: Env = {
  env: config.get('ENV'),
  db: config.get('DB_MONGO'),
  server: { host: config.get('SERVER.HOST'), port: config.get('SERVER.PORT') },
  jwt: {
    cert: config.get('JWT.CERT'),
    user: config.get('JWT.USER'),
    pass: config.get('JWT.PASS')
  }
}

interface Env {
  env:string,
  db:string,
  server:{
    host:string,
    port: number
  },
  jwt: {
    cert:string,
    user:string,
    pass:string
  }
}

export default configEnv
