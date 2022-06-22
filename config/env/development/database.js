const parse = require('pg-connection-string').parse;


module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'ec2-34-200-35-222.compute-1.amazonaws.com',
      port: '5432',
      database: 'dbboaqbl2lsu8m',
      user: 'acprfqdnelxhyo',
      password: '7e2b7f31a4e963e3a99c62043bbc65a16366348056c8a05bb49d525a43fc3461',
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: true,
  },
});