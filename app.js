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

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use((req, res, next) => {
  // cheap layout implementation for ejs
  const orig = res.render;
  res.render = (view, locals) => {
    app.render(view, locals, (err, html) => {
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
app.use(helmet());
app.use(logger('dev'));
app.use(cookieParser());
app.use('/assets', express.static('public'));

const provider = new Provider(ISSUER, providerConfiguration);

let server;

(async () => {
  await provider.initialize({
    clients,
  });

  provider.proxy = true;

  mountRoutes(app, provider);
  app.use(provider.callback);

  server = app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.info(`\x1b[32mServer listening on http://localhost:${PORT}, check it's /.well-known/openid-configuration \x1b[0m`);
  });
})().catch((err) => {
  if (server && server.listening) server.close();
  /* eslint-disable no-console */
  console.error(err);
  process.exitCode = 1;
});
