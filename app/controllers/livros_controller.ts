import { createLivroValidator } from '#validators/livro';
import type { HttpContext } from '@adonisjs/core/http'
import Livro from '#models/livro';
import { DateTime } from 'luxon'

export default class LivrosController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const Livros = await Livro.all()
    return Livros
  }

  /**
   * Display form to create a new record
   */

  /**
   * Handle form submission for the create action
  */
  
  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createLivroValidator);
    const livro = await Livro.create({
      ...payload,
      dataPublicacao: DateTime.fromJSDate(payload.dataPublicacao)
    })
    return livro;
  } 
  //captura o formulário, mas não será usado em nosso projeto (formulário está feito com svelte)

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const livro = Livro.findByOrFail(params.id)
    return livro
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
  // */
  async update({ params, request }: HttpContext) {
    const livro = await Livro.find(params.id)
    if (!livro) {
      throw new Error('Livro não encontrado')
    }

    const payload = await request.validateUsing(createLivroValidator)
    const data = {
      ...payload,
      dataPublicacao: DateTime.fromJSDate(payload.dataPublicacao as Date),
    }

    livro.merge(data)
    await livro.save()
    return livro
  }
  //mesma coisa que o edit, só que voltado para form (mesma situação que o store)

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
   const livro = await Livro.find(params.id)
    if (!livro) {
      throw new Error('Livro não encontrado')
    }

    await livro.delete()
    return { message: 'Livro deletado com sucesso' }
  }
}