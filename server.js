const
  swagger       = require('swagger-tools'),
  swaggerParser = require('swagger-parser'),
  faker         = require('faker/locale/es'),
  jsf           = require('json-schema-faker'),
  express       = require('express'),
  app           = express();

function initializeSwaggerMiddleware(options, api) {
  swagger.initializeMiddleware(api, middleware => {
    const port = options.port || 9000;
    app.use(middleware.swaggerUi({ swaggerUi: '/' }));
    app.listen(port, '0.0.0.0');
    console.log(`Server http started successfully on port http://0.0.0.0:${port}`);
  });
}

function initializeEndpoints(api) {
  for (const path in api.paths) {
    const methods = api.paths[path];
    initializeMethods(methods, api.basePath + path);
  }
}

function initializeMethods(methods, path) {
  for (const method in methods) {
    const responses = methods[method].responses;
    const formattedPath = path.replace('{', ':').replace('}', '');
    app[method](formattedPath, (req, res) => {
      const schema = responses[200].schema;
      res.json(jsf(schema));
    });
  }
}

module.exports = function start(idlfile, options) {
  swaggerParser.dereference(idlfile).then(api => {
    initializeSwaggerMiddleware(options, api);
    initializeEndpoints(api);
  });
};
