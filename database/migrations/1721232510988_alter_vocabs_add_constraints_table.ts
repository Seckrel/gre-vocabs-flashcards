import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vocabs'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('word').unique().notNullable().alter()
      table.specificType('meanings', 'text[]').notNullable().alter()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('word').alter() // This will remove unique and notNullable constraints
      table.specificType('meanings', 'text[]').alter() // Remove notNullable constraint
    })
  }
}
