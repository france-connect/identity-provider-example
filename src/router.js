import { urlencoded } from 'express';

import { authenticate } from './services/user-manager';

const messages = {
  invalid_credentials: {
    type: 'error',
    message: 'Email ou mot de passe incorrect.',
  },
};
const DEFAULT_EIDAS_LEVEL = 'eidas3';

export const getEidasLevel = (req) => {
  if (!req.session || !req.session.infos || !req.session.infos.acr_values) {
    return DEFAULT_EIDAS_LEVEL;
  }

  const validEidasLevel = ['eidas1', 'eidas2', 'eidas3'];
  const acrTab = req.session.infos.acr_values
    .split(' ')
    .filter(val => validEidasLevel.includes(val));

  if (acrTab.length === 1) {
    return acrTab[0];
  }
  return DEFAULT_EIDAS_LEVEL;
};

export const mountRoutes = (app, provider) => {
  app.use('/interaction', (req, res, next) => {
    res.set('Pragma', 'no-cache');
    res.set('Cache-Control', 'no-cache, no-store');
    next();
  });

  app.use('/interaction', urlencoded({ extended: false }));

  app.get('/', (req, res) => {
    res.sendStatus(200);
  });

  app.get('/interaction/:grant', async (req, res, next) => {
    try {
      const {
        uuid: interactionId,
        interaction: { error, error_description: errorDescription },
      } = await provider.interactionDetails(req);

      const notifications = messages[req.query.notification]
        ? [messages[req.query.notification]]
        : [];

      const acr = getEidasLevel(req);
      if (error === 'login_required') {
        return res.render('sign-in', {
          notifications,
          interactionId,
          acr,
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
          account: user.id,
          acr: req.body.acr,
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
        return res.redirect(
          `/interaction/${req.params.grant}?notification=${error.message}`,
        );
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
