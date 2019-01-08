import { isEmpty, isString } from 'lodash';

export const checkMandatoryData = (user) => {
  if (
    isEmpty(user.nomDeNaissance) || !isString(user.nomDeNaissance)
  ) {
    return {
      address: {
        country: user.codePaysDeNaissance,
        formatted: user.adresseFormatee,
        street_address: user.adresseFormatee,
      },
      birthdate: user.birthdate,
      birthcountry: user.codePaysDeNaissance,
      birthplace: user.departementDeNaissance,
      birthregion: user.regionDeNaissance,
      email: user.email,
      gender: user.Gender,
      given_name: user.prenom,
      middle_name: user.secondPrenom,
      nickname: user.prenom,
      phone_number: user.telephone,
      preferred_username: user.prenom,
      updated_at: user.updatedAt,
      siret: user.siret,
    };
  }

  if (
    isEmpty(user.prenom) || !isString(user.prenom)
  ) {
    return {
      address: {
        country: user.codePaysDeNaissance,
        formatted: user.adresseFormatee,
        street_address: user.adresseFormatee,
      },
      birthdate: user.birthdate,
      birthcountry: user.codePaysDeNaissance,
      birthplace: user.departementDeNaissance,
      birthregion: user.regionDeNaissance,
      email: user.email,
      family_name: user.nomDeNaissance,
      gender: user.Gender,
      middle_name: user.secondPrenom,
      phone_number: user.telephone,
      updated_at: user.updatedAt,
      siret: user.siret,
    };
  }
  if (
    isEmpty(user.birthdate) || !isString(user.birthdate)
  ) {
    return {
      address: {
        country: user.codePaysDeNaissance,
        formatted: user.adresseFormatee,
        street_address: user.adresseFormatee,
      },
      birthcountry: user.codePaysDeNaissance,
      birthplace: user.departementDeNaissance,
      birthregion: user.regionDeNaissance,
      email: user.email,
      family_name: user.nomDeNaissance,
      gender: user.Gender,
      given_name: user.prenom,
      middle_name: user.secondPrenom,
      name: `${user.nomDeNaissance} ${user.prenom}`,
      nickname: user.prenom,
      phone_number: user.telephone,
      preferred_username: `${user.prenom}_${user.nomDeNaissance}`,
      updated_at: user.updatedAt,
      siret: user.siret,
    };
  }
  if (
    isEmpty(user.departementDeNaissance) || !isString(user.departementDeNaissance)
  ) {
    return {
      address: {
        country: user.codePaysDeNaissance,
        formatted: user.adresseFormatee,
        street_address: user.adresseFormatee,
      },
      birthdate: user.birthdate,
      birthcountry: user.codePaysDeNaissance,
      birthregion: user.regionDeNaissance,
      email: user.email,
      family_name: user.nomDeNaissance,
      gender: user.Gender,
      given_name: user.prenom,
      middle_name: user.secondPrenom,
      name: `${user.nomDeNaissance} ${user.prenom}`,
      nickname: user.prenom,
      phone_number: user.telephone,
      preferred_username: `${user.prenom}_${user.nomDeNaissance}`,
      updated_at: user.updatedAt,
      siret: user.siret,
    };
  }

  if (
    isEmpty(user.regionDeNaissance) || !isString(user.regionDeNaissance)
  ) {
    return {
      address: {
        country: user.codePaysDeNaissance,
        formatted: user.adresseFormatee,
        street_address: user.adresseFormatee,
      },
      birthdate: user.birthdate,
      birthcountry: user.codePaysDeNaissance,
      birthplace: user.departementDeNaissance,
      email: user.email,
      family_name: user.nomDeNaissance,
      gender: user.Gender,
      given_name: user.prenom,
      middle_name: user.secondPrenom,
      name: `${user.nomDeNaissance} ${user.prenom}`,
      nickname: user.prenom,
      phone_number: user.telephone,
      preferred_username: `${user.prenom}_${user.nomDeNaissance}`,
      updated_at: user.updatedAt,
      siret: user.siret,
    };
  }

  if (
    isEmpty(user.Gender) || !isString(user.Gender)
  ) {
    return {
      address: {
        country: user.codePaysDeNaissance,
        formatted: user.adresseFormatee,
        street_address: user.adresseFormatee,
      },
      birthdate: user.birthdate,
      birthcountry: user.codePaysDeNaissance,
      birthplace: user.departementDeNaissance,
      birthregion: user.regionDeNaissance,
      email: user.email,
      family_name: user.nomDeNaissance,
      given_name: user.prenom,
      middle_name: user.secondPrenom,
      name: `${user.nomDeNaissance} ${user.prenom}`,
      nickname: user.prenom,
      phone_number: user.telephone,
      preferred_username: `${user.prenom}_${user.nomDeNaissance}`,
      updated_at: user.updatedAt,
      siret: user.siret,
    };
  }

  return {
    address: {
      country: user.codePaysDeNaissance,
      formatted: user.adresseFormatee,
      locality: '000',
      postal_code: '000',
      region: '000',
      street_address: user.adresseFormatee,
    },
    birthdate: user.birthdate,
    birthcountry: user.codePaysDeNaissance,
    birthplace: user.departementDeNaissance,
    birthregion: user.regionDeNaissance,
    email: user.email,
    family_name: user.nomDeNaissance,
    gender: user.Gender,
    given_name: user.prenom,
    middle_name: user.secondPrenom,
    name: `${user.nomDeNaissance} ${user.prenom}`,
    nickname: user.prenom,
    phone_number: user.telephone,
    preferred_username: `${user.prenom}_${user.nomDeNaissance}`,
    updated_at: user.updatedAt,
    siret: user.siret,
  };
};
