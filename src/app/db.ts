import mongoose from 'mongoose'
import env from './env'

class Database {
  public async start (): Promise<void> {
    await this.mongoConnect()
    console.log('DB connected!')
  }

  private async mongoConnect (): Promise<void> {
    mongoose.connect(env.db)
  }
}

export default new Database()
