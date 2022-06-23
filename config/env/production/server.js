module.exports = ({ env }) => ({
    proxy: true,
    url: env('MY_HEROKU_URL'),
    autoReload: { 'enabled': true }
    app: { 
      keys: env.array('APP_KEYS'),
	
    },
  })