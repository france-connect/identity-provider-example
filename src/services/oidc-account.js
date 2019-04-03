import { isEmpty } from 'lodash';

import { findOneById as findOneUserById } from './user-manager';

export const findById = async (ctx, sub) => {
  const user = await findOneUserById(sub);

  if (isEmpty(user)) {
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
        adresseVoie,
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
          street_address: adresseVoie,
        },
        phone_number: telephone,
      };
    },
  };
};
