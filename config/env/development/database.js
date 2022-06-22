const parse = require('pg-connection-string').parse;


module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: '0.0.0.0',
      port: '1337',
      database: 'postgres://acprfqdnelxhyo:7e2b7f31a4e963e3a99c62043bbc65a16366348056c8a05bb49d525a43fc3461@ec2-34-200-35-222.compute-1.amazonaws.com:5432/dbboaqbl2lsu8m',
      user: 'sarangthemamarjit123@gmail.com',
      password: 'Langthabal123@',
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: true,
  },
});