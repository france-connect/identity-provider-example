import { findById } from '../services/oidc-account';

export const provider = {
  scopes: ['birth'],
  cookies: {
    long: { signed: true, maxAge: (1 * 24 * 60 * 60) * 1000 }, // 1 day in ms
    short: { signed: true },
    keys: ['some secret key', 'and also the old rotated away some time ago', 'and one more'],
  },
  claims: {
    openid: ['sub'], // Identifiant technique (sub) de l'utilisateur au format OpenIDConnect
    gender: ['gender'], // Sexe
    birthdate: ['birthdate'], // Date de naissance
    birthcountry: ['birthcountry'], // Pays de naissance
    birthplace: ['birthplace'], // Ville de naissance
    given_name: ['given_name'], // Prénoms
    family_name: ['family_name'], // Nom de naissance
    email: ['email'], // Adresse électronique
    preferred_username: ['preferred_username'], // Nom d'usage (information renvoyée si disponible)
    address: ['address'], // Adresse postale (information renvoyée si disponible)
    phone: ['phone_number'], // Numéro de téléphone (information renvoyée si disponible)
    profile: [
      'sub',
      'given_name',
      'family_name',
      'birthdate',
      'gender',
      'birthplace',
      'birthcountry',
      'preferred_username',
    ],
  },
  grant_types_supported: ['authorization_code'],
  features: {
    devInteractions: false,
    discovery: true,
  },
  routes: {
    authorization: '/user/authorize',
    end_session: '/user/session/end',
    revocation: '/user/token/revocation',
    token: '/user/token',
    userinfo: '/api/user',
  },
  formats: {
    default: 'opaque',
  },
  interactionUrl: function interactionUrl(ctx, interaction) { // eslint-disable-line no-unused-vars
    return `/interaction/${ctx.oidc.uuid}`;
  },
  clientCacheDuration: 1 * 24 * 60 * 60, // 1 day in seconds,
  ttl: {
    AccessToken: 1 * 60 * 60, // 1 hour in seconds
    AuthorizationCode: 10 * 60, // 10 minutes in seconds
    IdToken: 1 * 60 * 60, // 1 hour in seconds
    DeviceCode: 10 * 60, // 10 minutes in seconds
    RefreshToken: 1 * 24 * 60 * 60, // 1 day in seconds
  },
  findById,
};
