var currentEnv, port;

currentEnv = process.env.NODE_ENV || 'development';

port = process.env.PORT || 8000;

module.exports = {
  env: {
    development: currentEnv === 'development',
    production: currentEnv === 'production'
  },
  server: {
    port: port,
    url: currentEnv === 'development' ? "http://localhost:" + port + "/" : "http://" + process.env.SUBDOMAIN + ".jit.su/"
  }
};
