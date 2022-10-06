import Message from 'App/Models/Message'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Message, ({ faker }) => {
  return {
    name: faker.name.fullName(),
    message: faker.lorem.paragraphs(),
  }
}).build()
