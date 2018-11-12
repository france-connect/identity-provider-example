import querystring from 'querystring';
import { urlencoded } from 'express'; // eslint-disable-line import/no-unresolved
import Account from '../data/account';

/* eslint-disable-next-line no-unused-vars */
const body = urlencoded({ extended: false });

module.exports = (app, provider) => {
  /* eslint-disable-next-line no-unused-vars */
  const { constructor: { errors: { SessionNotFound } } } = provider;

  function setNoCache(req, res, next) {
    res.set('Pragma', 'no-cache');
    res.set('Cache-Control', 'no-cache, no-store');
    next();
  }
  app.get('/', (req, res) => { res.sendStatus(200); });

  app.get('/interaction/:grant', setNoCache, async (req, res, next) => {
    const error = { message: '' };

    try {
      const details = await provider.interactionDetails(req);
      const client = await provider.Client.find(details.params.client_id);

      if (details.interaction.error === 'login_required') {
        return res.render('index', {
          client,
          details,
          title: 'Sign-in',
          error,
          params: querystring.stringify(details.params, ',<br/>', ' = ', {
            encodeURIComponent: value => value,
          }),
          interaction: querystring.stringify(details.interaction, ',<br/>', ' = ', {
            encodeURIComponent: value => value,
          }),
        });
      }

      return res.render('interaction', {
        client,
        details,
        title: 'Authorize',
        params: querystring.stringify(details.params, ',<br/>', ' = ', {
          /* eslint-disable-next-line no-unused-expressions */
          encodeURIComponent: (value) => {
            /* eslint-disable-next-line no-unused-expressions */
            value;
          },
        }),
        interaction: querystring.stringify(details.interaction, ',<br/>', ' = ', {
          encodeURIComponent: value => value,
        }),
      });
    } catch (err) {
      return next(err);
    }
  });
  /* eslint-disable consistent-return */
  app.post('/interaction/:grant/login', setNoCache, async (req, res, next) => {
    const details = await provider.interactionDetails(req);
    const client = await provider.Client.find(details.params.client_id);

    try {
      Account
        .authenticate(req.body.login, req.body.password)
        .then(async (data) => {
          if (data === null) {
            const error = { message: 'Invalid credentiales' };
            res.render('index', {
              details, client, title: 'Sign-In', error,
            });
          }
          if (data === undefined) {
            const error = { message: 'Invalid credentiales' };
            res.render('index', {
              details, client, title: 'Sign-In', error,
            });
          }
          const account = await Account.findByLogin(req.body.login);

          const result = {
            login: {
              account: account.accountId,
              acr: 'urn:mace:incommon:iap:bronze',
              amr: ['pwd'],
              remember: !!req.body.remember,
              ts: Math.floor(Date.now() / 1000),
            },
            consent: {},
          };

          await provider.interactionFinished(req, res, result);
        }).catch(err => next(err));
    } catch (err) {
      return next(err);
    }
  });
};
