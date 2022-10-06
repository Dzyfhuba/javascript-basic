import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Message from 'App/Models/Message'

export default class MessagesController {
  public async index ({response}: HttpContextContract) {
    const messages = await Message.query().orderBy('updated_at', 'desc')

    return response.status(200).json(messages)
  }

  public async create ({}: HttpContextContract) {}

  public async store ({request, response}: HttpContextContract) {
    const {name, message} = request.body()

    const data = await Message.create({
      name,
      message,
    })

    return response.status(201).json({
      ...data.$attributes,
    })
  }

  public async show ({}: HttpContextContract) {}

  public async edit ({}: HttpContextContract) {}

  public async update ({}: HttpContextContract) {}

  public async destroy ({}: HttpContextContract) {}
}
