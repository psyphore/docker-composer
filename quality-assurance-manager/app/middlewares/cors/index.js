'use strict';

const cors = require('cors')

module.exports = strapi => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) =>{
        cors({
          allowedHeaders: '*',
          origin: ['http://localhost']
        })
        await next();
      })
    }
  }
}
