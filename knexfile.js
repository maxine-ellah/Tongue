// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'tongue_dev'
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: 'tongue_test'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: process.env.DATABASE_URL

};
