import app from './app/app'
import env from './app/env'

app.listen(env.server.port)
console.log(`Server HTTP is listening on port ${env.server.port} | ENV: ${env.env} \n Docs: http://${env.server.host}:${env.server.port}/docs`)
