import type { HttpContext } from '@adonisjs/core/http'
import Vocabs from '#models/vocab'

export default class VocabsController {
  async index({ request, inertia }: HttpContext) {
    const requestBody = request.body()
    const currentIdx: number | undefined = requestBody?.currentIdx

    let choosenId: number

    if (currentIdx) {
      const listOfIds = await Vocabs.query().select('id').where('id', '!=', currentIdx)
      const lenOfIdReturned = listOfIds.length
      choosenId = Math.floor(Math.random() * (lenOfIdReturned - 0 + 1)) + 0
    } else {
      const listOfIds = await Vocabs.query().select('id')
      const lenOfIdReturned = listOfIds.length
      choosenId = Math.floor(Math.random() * (lenOfIdReturned - 0 + 1)) + 0
    }

    return inertia.render('home', {
      vocab: await Vocabs.query().select('id', 'word', 'meanings').orderByRaw('RANDOM()').first(),
    })
  }
}
