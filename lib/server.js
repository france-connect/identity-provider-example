'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _oidcProvider = require('oidc-provider');

var _oidcProvider2 = _interopRequireDefault(_oidcProvider);

var _provider = require('./config/provider');

var _clients = require('./config/clients');

var _router = require('./router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { PORT = 5000, ISSUER = `http://localhost:${PORT}` } = process.env;

const server = (0, _express2.default)();

// View engine setup
server.set('views', _path2.default.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use((req, res, next) => {
  // cheap layout implementation for ejs
  const orig = res.render;
  res.render = (view, locals) => {
    server.render(view, locals, (err, html) => {
      if (err) throw err;
      orig.call(res, '_layout', _extends({}, locals, {
        body: html
      }));
    });
  };
  next();
});

// Other middlewares setup
server.use((0, _helmet2.default)());
server.use((0, _morgan2.default)('dev'));
server.use((0, _cookieParser2.default)());
server.use('/assets', _express2.default.static(_path2.default.join(__dirname, 'public')));

const provider = new _oidcProvider2.default(ISSUER, _provider.provider);

server.provider = provider;

server.start = function () {
  let serverInstance;

  (async () => {
    await provider.initialize({
      clients: _clients.clients
    });

    provider.proxy = true;

    (0, _router.mountRoutes)(server, provider);
    server.use(provider.callback);

    serverInstance = server.listen(PORT, () => {
      /* eslint-disable no-console */
      console.info(`\x1b[32mServer listening on http://localhost:${PORT}, check it's /.well-known/openid-configuration \x1b[0m`);
    });
  })().catch(err => {
    if (serverInstance && serverInstance.listening) serverInstance.close();
    /* eslint-disable no-console */
    console.error(err);
    process.exitCode = 1;
  });
};

exports.default = server;