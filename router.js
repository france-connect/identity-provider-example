import { urlencoded } from 'express';

import { authenticate } from './services/user-manager';

const messages = {
  invalid_credentials: {
    type: 'error',
    message: 'Email ou mot de passe incorrect.',
  },
};

export const mountRoutes = (app, provider) => {
  app.use('/interaction', (req, res, next) => {
    res.set('Pragma', 'no-cache');
    res.set('Cache-Control', 'no-cache, no-store');
    next();
  });

  app.use('/interaction', urlencoded({ extended: false }));

  app.get('/', (req, res) => { res.sendStatus(200); });

  app.get('/interaction/:grant', async (req, res, next) => {
    try {
      const {
        uuid: interactionId,
        interaction: { error, error_description: errorDescription },
      } = await provider.interactionDetails(req);

      const notifications = messages[req.query.notification]
        ? [messages[req.query.notification]]
        : [];

      if (error === 'login_required') {
        return res.render('sign-in', {
          notifications,
          interactionId,
        });
      }

      return res.render('error', {
        errorCode: error,
        errorMessage: errorDescription,
      });
    } catch (err) {
      return next(err);
    }
  });

  app.post('/interaction/:grant/login', async (req, res, next) => {
    try {
      const user = await authenticate(req.body.login, req.body.password);

      const result = {
        login: {
          account: user.$oid,
          acr: 'urn:mace:incommon:iap:bronze',
          amr: ['pwd'],
          ts: Math.floor(Date.now() / 1000),
        },
        consent: {
          rejectedScopes: [],
          rejectedClaims: [],
        },
      };

      return await provider.interactionFinished(req, res, result);
    } catch (error) {
      if (error.message === 'invalid_credentials') {
        return res.redirect(`/interaction/${req.params.grant}?notification=${error.message}`);
      }

      return next(error);
    }
  });


  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err);

    return res.render('error', {
      errorCode: err.statusCode || err,
      errorMessage: err.message,
    });
  });
};
