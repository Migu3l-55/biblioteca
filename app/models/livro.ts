import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare titulo : String

  @column()
  declare autor : String

  @column()
  declare dataPublicacao : DateTime

  @column()
  declare genero : String

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}