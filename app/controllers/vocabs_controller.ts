import type { HttpContext } from '@adonisjs/core/http'
import Vocabs from '#models/vocab'

export default class VocabsController {
  async index({ request, inertia }: HttpContext) {
    const requestBody = request.body()
    const currentIdx: number | undefined = requestBody?.currentIdx

    let vocab
    if (currentIdx) {
      vocab = await Vocabs.query()
        .select('id', 'word', 'meanings')
        .where('id', '!=', currentIdx)
        .orderByRaw('RANDOM()')
        .first()
    } else {
      vocab = await Vocabs.query().select('id', 'word', 'meanings').orderByRaw('RANDOM()').first()
    }

    return inertia.render('home', {
      vocab: vocab,
    })
  }
}
