const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'postgres://acprfqdnelxhyo:7e2b7f31a4e963e3a99c62043bbc65a16366348056c8a05bb49d525a43fc3461@ec2-34-200-35-222.compute-1.amazonaws.com:5432/dbboaqbl2lsu8m',
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});