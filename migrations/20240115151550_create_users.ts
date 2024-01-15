import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('frist_name', 100).notNullable();
    table.string('last_name', 100);
    table.string('email', 255).notNullable().unique();
    table.string('password_hash', 255).notNullable().unique();
    table.decimal('salary', 15, 2).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable('users')
}
