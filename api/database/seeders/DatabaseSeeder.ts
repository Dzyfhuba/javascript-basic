import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import MessageFactory from 'Database/factories/MessageFactory'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await MessageFactory.createMany(100)
  }
}
