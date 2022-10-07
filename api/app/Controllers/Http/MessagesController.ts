import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Message from 'App/Models/Message'
import Logger from '@ioc:Adonis/Core/Logger'

export default class MessagesController {
  public async index ({response, request}: HttpContextContract) {
    const {name, message} = request.qs() as {name: string, message: string}
    try {
      let messages
      Logger.info(`name or message: ${name || message}`)
      if (name || message) {
        messages = await Message
          .query()
          .whereILike('name', `%${name}%`)
          .orWhereILike('message', `%${message}%`)
      } else {
        messages = await Message
          .query()
          .orderBy('updated_at', 'desc')
      }

      return response.ok(messages)
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async create ({response}: HttpContextContract) {
    try {
      const message = {
        name: 'fill this',
        message: 'fill this',
      }

      return response.ok(message)
    } catch (error) {
      return response.internalServerError()
    }
  }

  public async store ({request, response}: HttpContextContract) {
    try {
      const {name, message} = request.body()

      const data = await Message.create({
        name,
        message,
      })

      return response.ok({
        ...data.$attributes,
      })
    } catch (error) {

    }
  }

  public async show ({request, response}: HttpContextContract) {
    const {id} = request.params()
    try {
      const message = await Message.findOrFail(id)

      return response.ok(message)
    } catch (error) {
      return response.internalServerError()
    }
  }

  public async edit ({request, response}: HttpContextContract) {
    try {
      const {id} = request.params()
      const message = await Message.findOrFail(id)
      return response.created(message)
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async update ({request, response}: HttpContextContract) {
    try {
      const {id} = request.params()
      const message = await Message.updateOrCreate({id}, {...request.body()})
      return response.created(message)
    } catch (error) {
      return response.internalServerError(error, true)
    }
  }

  public async destroy ({request, response}: HttpContextContract) {
    try {
      const {id} = request.params()
      const message = await Message.findOrFail(id)
      await message.delete()
      return response.created(message)
    } catch (error) {
      return response.internalServerError(error)
    }
  }
}
