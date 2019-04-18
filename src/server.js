import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';
import Provider from 'oidc-provider';

import { provider as providerConfiguration } from './config/provider';
import { clients } from './config/clients';
import { mountRoutes } from './router';

const { PORT = 5000, ISSUER = `http://localhost:${PORT}` } = process.env;

const server = express();

// View engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use((req, res, next) => {
  // cheap layout implementation for ejs
  const orig = res.render;
  res.render = (view, locals) => {
    server.render(view, locals, (err, html) => {
      if (err) throw err;
      orig.call(res, '_layout', {
        ...locals,
        body: html,
      });
    });
  };
  next();
});

// Other middlewares setup
server.use(helmet());
server.use(logger('dev'));
server.use(cookieParser());
server.use('/assets', express.static(path.join(__dirname, 'public')));

const provider = new Provider(ISSUER, providerConfiguration);

server.provider = provider;

server.start = function() {
  let serverInstance;

  (async () => {
    await provider.initialize({
      clients,
    });

    provider.proxy = true;

    mountRoutes(server, provider);
    server.use(provider.callback);

    serverInstance = server.listen(PORT, () => {
      /* eslint-disable no-console */
      console.info(`\x1b[32mServer listening on http://localhost:${PORT}, check it's /.well-known/openid-configuration \x1b[0m`);
    });
  })().catch((err) => {
    if (serverInstance && serverInstance.listening) serverInstance.close();
    /* eslint-disable no-console */
    console.error(err);
    process.exitCode = 1;
  });
}

export default server;
