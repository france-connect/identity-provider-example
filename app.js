import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import helmet from 'helmet';
import Provider from 'oidc-provider';
import Account from './data/account';

const { provider: providerConfiguration, clients } = require('./config/providerConfig');

const { PORT = 4000, ISSUER = `http://localhost:${PORT}` } = process.env;
const indexRouter = require('./routes/index');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set the provider findById method.
providerConfiguration.findById = Account.findById;

// Create new Provider
const provider = new Provider(ISSUER, providerConfiguration);

/**
 * Get port from environment and store in Express.
 */
app.set('port', PORT);

let server;

(async () => {
  await provider.initialize({
    clients,
  });

  indexRouter(app, provider);
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
