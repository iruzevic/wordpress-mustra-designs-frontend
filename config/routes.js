const routes = module.exports = require('next-routes')();

routes
  .add('root', '/:type?/:slug?', '/index');
