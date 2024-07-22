import env from '#start/env'
import { BaseCommand, args } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import csv from 'csv-parser'
import { Readable } from 'node:stream'
import Vocabs from '#models/vocab'

type TRecords = {
  word: string
  meanings: string[]
}

export default class CreateDictionary extends BaseCommand {
  static commandName = 'create:dictionary'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  @args.string({
    argumentName: 'csv-id',
    description: 'UploadThing File csv file id',
  })
  declare csvid: string

  async run() {
    try {
      const res = await fetch(`https://utfs.io/a/${env.get('UPLOADTHING_APP_ID')}/${this.csvid}`, {
        method: 'get',
        headers: {
          'content-type': 'text/csv;charset=UTF-8',
        },
      })
      const csvText = await res.text()
      const readable = Readable.from(csvText)

      const records: TRecords[] = []

      readable
        .pipe(csv({ headers: false }))
        .on('data', (row) => {
          const word = row['0']
          if (!word) return

          delete row['0']

          const record: TRecords = {
            word: word,
            meanings: [],
          }

          for (let index in row) {
            if (row[index]) {
              record['meanings'].push(row[index])
            }
          }
          records.push(record)
        })
        .on('end', async () => {
          console.log('CSV file successfully processed')

          try {
            await Vocabs.createMany(records)
            this.logger.success('Done')
          } catch (e) {
            console.log(e)
            this.logger.error(e.message)
          }
          return
        })
        .on('error', (error) => {
          console.error('Error processing the CSV file:', error)
        })
    } catch (e) {
      console.log('Error', e)
    }
  }
}
