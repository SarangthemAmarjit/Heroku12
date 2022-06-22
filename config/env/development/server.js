module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://herokunew123.herokuapp.com/'),
    app: { 
      keys: env.array('APP_KEYS')
    },
  })
 