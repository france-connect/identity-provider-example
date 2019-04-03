'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findById = undefined;

var _lodash = require('lodash');

var _userManager = require('./user-manager');

const findById = exports.findById = async (ctx, sub) => {
  const user = await (0, _userManager.findOneById)(sub);

  if ((0, _lodash.isEmpty)(user)) {
    return null;
  }

  return {
    accountId: sub,
    async claims() {
      const {
        id,
        // identifiant,
        // motDePasse,
        nomDeNaissance,
        nomDUsage,
        prenoms,
        genre,
        email,
        telephone,
        dateDeNaissance,
        codePostalLieuDeNaissance,
        codePaysDeNaissance,
        adressePays,
        adresseVille,
        adresseCodePostal,
        adresseVoie
      } = user;

      return {
        sub: id,
        given_name: prenoms,
        family_name: nomDeNaissance,
        birthdate: dateDeNaissance,
        gender: genre,
        birthplace: codePostalLieuDeNaissance,
        birthcountry: codePaysDeNaissance,
        preferred_username: nomDUsage,
        email,
        address: {
          country: adressePays,
          formatted: [adressePays, adresseVille, adresseCodePostal, adresseVoie].join(' '),
          locality: adresseVille,
          postal_code: adresseCodePostal,
          street_address: adresseVoie
        },
        phone_number: telephone
      };
    }
  };
};